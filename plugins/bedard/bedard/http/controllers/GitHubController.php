<?php namespace Bedard\Bedard\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Str;

class GitHubController extends Controller
{
    /**
     * Fetch my contribution history.
     *
     * @return array
     */
    public function contributions()
    {
        $contributions = [];

        for ($year = (int) date('Y'); $year >= 2014; $year--) {
            array_push($contributions, [
                'data' => self::getContributions($year),
                'year' => $year,
            ]);
        }

        return $contributions;
    }

    /**
     * Scrape contribution activity from GitHub. I'm sure there
     * is a better way to get this data, but who's got time for
     * that? Maybe one day I'll come back and do this right.
     *
     * @return array
     */
    private function getContributions($year)
    {
        // return the cached file if we have one
        $path = plugins_path("bedard/bedard/fixtures/contributions/{$year}.json");

        if (file_exists($path)) {
            return json_decode(file_get_contents($path), true);
        }

        // and if not, time to scrape github
        $contents = file_get_contents("https://github.com/users/scottbedard/contributions?from={$year}-12-01&to={$year}-12-31");

        preg_match_all('/data-count="(\d+)" data-date="([\d\-]+)"/', $contents, $data);

        $contributions = array_combine($data[2], array_map('intval', $data[1]));

        return array_filter($contributions, function ($key) use ($year) {
            return Str::startsWith($key, $year);
        }, ARRAY_FILTER_USE_KEY);
    }
}
