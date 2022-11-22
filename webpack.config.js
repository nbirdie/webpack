// c помощью встроенного модуля подключаем path, который позволяет работать с путями на платформе
const path = require("path");
//позволяет взаимодействовать с html
const HTMLebpackPlugin = require("html-webpack-plugin")
//позволяет очищать лишние файлы из dist не актуальные
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    
  mode: "development",
  //entry file for our app, которых может быть много
  entry: {
    main:  "./src/index.js",
    analytics: "./src/analytics.js",
  },
  //куда складывать рез-ты webpack
  output: {
    // принято называть так output файл, в который webpack соберет все js файлы
    // [name] - динамический паттерн с именем в засимости от точек входа (main, analytics)
    // [name].[contenthash].js - паттерн для добавления к имени hash в зависимости изменений, которые были сделаны в файлах entry 
    // documentation: https://webpack.js.org/configuration/output/
        filename: "[name].bundle.js",
    //куда все это складывать (в конечном итоге вся конструкция вернет строку: куда все складывать)
    //__dirname - системная переменная (текущая директория)
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    //добавляем плагины через новые инстансы (Инстанс — экземпляр класса в объектно-ориентированном программировании)
    //добавляет html файл в dist на основании указанного template файла c автоматическим обновлением скриптов
    new HTMLebpackPlugin({
        template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
