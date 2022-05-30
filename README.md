Сборка скрипта:

1. Выполнить `npm i`
2. Выполнить `npm run build`
3. Чтобы подключить виджет, нужно `bundle.js`, `bundle.css` и папку `media` поместить в корневой каталог сайта, а также добавить в документ эти строки:
    ```
    <script defer="defer" src="/bundle.js"></script>
    <link href="/bundle.css" rel="stylesheet">
    ```
    Виджет состоит только из этих файлов, остальные не считаются.
