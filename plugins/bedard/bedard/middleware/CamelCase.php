<?php namespace Bedard\Bedard\Middleware;

use Closure;

class CamelCase
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request     $request
     * @param  \Closure                     $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $content = $response->content();
        $json = json_decode($content, true);

        if (json_last_error() === JSON_ERROR_NONE) {
            $response->setContent(json_encode($this->camelize($json)));
        }

        return $response;
    }

    /**
     * Camel-case the keys in an array.
     * 
     * @param  array    $arr
     * @return array
     */
    private function camelize(array $arr)
    {
        $result = [];
    
        foreach ($arr as $key => $val) {
            $result[camel_case($key)] = is_array($val) ? $this->camelize($val) : $val;
        }
    
        return $result;
    }
}