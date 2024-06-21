<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'Laravel') }}</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
  @inertiaHead

  <script>
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0B1120')
    } else {
      document.documentElement.classList.remove('dark')
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f8fafc')
    }
  </script>
</head>

<body class="font-sans antialiased">
  @inertia
</body>

</html>
