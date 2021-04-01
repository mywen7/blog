# Nodejs安装软件遇见的问题及解决方法

## 安装React-Native
```
myw@mengyawendeMacBook-Pro project % react-native init SimpleApp
zsh: command not found: react-native
myw@mengyawendeMacBook-Pro project % npm install -g react-native-cli
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/react-native-cli
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/react-native-cli'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/react-native-cli'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/react-native-cli'
npm ERR! }
npm ERR! 
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/myw/.npm/_logs/2021-04-01T07_37_16_486Z-debug.log
```
解决方法：  
<https://blog.csdn.net/qq_31989047/article/details/114531241>  
![image](./assets/node-p-1.png)  
解决办法：sudo chown -R $你的用户名 ~/.npm


## 搭建React-Native开发环境
```
Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template 错误
```
React Native 使用 react-native init hello 初始化项目的时候可能会报错，错误信息很长，我截取一部分信息如下  

Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template  
出现这个原因是因为 React Native 检测到我们安装了 XCode 然后又推荐我们安装了 pod 导致的。  

因为我们从未打开过 XCode，没有接受使用 XCode 协议。  

解决方法就是打开一下 XCode 然后关闭。然后在运行下面的命令  

 cd ./hello/ios && pod install  
 
 本来如此可以成功，但是由于MacBook Pro M1芯片的原因，又出现问题：  
 解决方法：  
 ```
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install
```
成功解决