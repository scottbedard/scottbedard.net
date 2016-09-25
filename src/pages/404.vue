<template>
    <div class="page splash">
        <div class="not-found">
            {{ message }}
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            message() {
                let messages = [
                    'Four oh four',
                    'Sorry, this page does not exist.',
                    'Sorry, I\'ve got nothing for you here.',
                    'This is not the page you\'re looking for.',
                    'This page either moved, or never existed.',
                    'Welcome to my 404 page, I hope you like it.',
                ];

                return messages[Math.floor(Math.random() * messages.length)];
            },
        },
    };
</script>
