# Express | File Upload 

## Important

In the terminal
```
npm install multer
```

Create a folder to save the files. Example: `/public/uploads`.


In the view
```hbs
<form action="/your-route" method="post" enctype="multipart/form-data">
  .....
  <input type="file" name="apple">
</form>
```


In the routes file
```js
const multer = require("multer");
const upload = multer({ dest: "./public/uploads/" }); // Configuration part. The files are saved inside the folder "/public/uploads"

router.post("/your-route", upload.single("apple"), (req, res) => {
  // The informations are saved in req.file (example: req.file.filename)
  // ...
});
```


