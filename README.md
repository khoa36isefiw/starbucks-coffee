### Starbucks Coffee

### Overview

Starbucks Coffee Project is a modern web application designed to simulate a fake Starbucks online experience. Built with cutting-edge technologies such as ReactJS, TypeScript, and Material-UI, the application provides users with a seamless, interactive, and visually appealing interface to explore coffee menus, promotions, and more.

### Tech Stack

-   Typescript
-   ReactJS
-   Material-UI
-   Axios

### Install Commitlint and Husky

1. npm install --save-dev @commitlint/{cli,config-conventional}
2. echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
3. npm install --save-dev husky
4. npx husky init
5. echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

-   After doing these steps above, we need to gotta `.husky` and delete `pre-commit` file
-   Continue with changing `export default` `commitlint.config.js` to `module.exports` such as:

```
module.exports = { extends: ["@commitlint/config-conventional"] };
```

### NestJS

-   Dependency Injection
-   Graph SQL
-   decorator
-   ioc - inverstion of control

-   memo: tính toán giá trị
-   callback: function
-   useEffect: chỉ cần mấy cái thật sự cần thay đổi

### Tanstack query

-   `staleTime`: default 0ms. Sau thời gian này sẽ refetch lại data, nếu không set time cho nó thì cứ mỗi lần chuyển qua lại page chẳng hạn thì nó sẽ fetch lại api
-   `cacheTime`: default 5p `(5*60*1000)`ms, sau 5p thì data sẽ bị xoá ra khỏi bộ nhớ đệm --> data cũ, nhưng có thể vẫn chưa bị oá ra khỏi bộ nhớ điệm nếu set staleTime (sẽ refresh lại data sau khoảng thời gian nào đó) < cacheTime
-   `inactive`: data không còn component nào subscribe cả
