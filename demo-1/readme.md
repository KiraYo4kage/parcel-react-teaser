## 搭建一个最简单的Parcel打包工程

在新建的项目下安装Parcel

Yarn 方式安装：
```shell
yarn add parcel-bundler --dev
```

NPM 方式安装：
```shell
npm install parcel-bundler --save-dev
```

创建入口文件 index.html 和 index.json

```js
document.body.innerText = 'Hello Parcel!';
```

然后，在 package.json 中添加脚本命令。可以看到这里将 index.html 作为入口文件，但这不是强制的。

```json
{
  "scripts": {
    "dev": "parcel index.html",
    "watch": "parcel watch index.html",
    "build": "parcel build index.html"
  }
}
```

如果你没有自己的本地服务，那就执行 dev 命令，Parcel会为你创建一个node服务；如果你有自己的服务，可以使用 watch 命令监听变化并重新打包。

Ok，浏览器打开 http://localhost:1234 就可以看到我们的页面了！