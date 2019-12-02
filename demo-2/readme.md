## 搭建包含样式文件的工程

项目中一般都会使用css预处理工具，这里我们以 Less 为例。（当然，直接使用css也是可以的）

创建样式文件 index.less
```Less
body {
  color: violet;
}
```

然后直接在 index.html 中引入

```html
<link rel="stylesheet" href="index.less" />
```

或者在 index.js 中引入
```js
import './index.less';
```

可以惊喜地发现，项目HMR过程中控制台输出了正在安装Less依赖的提示，而我们并没有将Less添加到devDependencies中。
抬头就可以看见页面上的文字变色了，这个过程中如果没有去看控制台，你甚至会忘了有Less依赖这回事。

使用postcss，在根目录添加 .postcssrc 文件
```json
{
  "modules": true,
  "plugins": {
    "autoprefixer": {
      "grid": true
    }
  }
}
```

同样，Parcel 在检测到这个配置文件后会在HMR时自动安装依赖 postcss-modules 和 autoprefixer。现在来试用下：
```less
body {
  color: violet;
  display: flex;
}
```

生成代码如下：
```css
body {
    color: violet;
    display: -webkit-box;
    display: flex;
}
```

现在，你可以根据自己的需要配置 .postcssrc 来添加插件。