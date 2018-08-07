# 脚手架构建项目
- 安装vue-cli: npm i -g vue-cli
- 尝试使用 vue --version
  如果提示 “vue 不是内部命令”
  则需要找到vue的安装路径
  然后将安装路径添加至环境变量（系统变量/用户变量）
  重启终端，再次运行即可
- 构建项目:vue init webpack c01-project
- cd c01-project
- 有node_modules 直接 npm run dev
- 没有node_modules 先安装node_modules 再npm run dev


# 目录结构
- README.md：说明文件
- .postcssrc.js：postcss 配置文件
- .gitignore：git 忽略
- .editorconfig：编辑相关配置
- .babelrc：babel 配置文件
- static：静态资源文件（图片/样式）
- src：源码文件
- config：项目相关配置文件（开发/生产/服务器相关）
- build：构建相关配置文件


# 初学vue,文件配置修改
- 清空min.js文件
- 删除App.vue
- 删除 components 文件夹

