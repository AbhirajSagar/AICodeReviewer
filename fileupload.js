document.getElementById('fileSelector').addEventListener('change', function (event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) 
        {
            const content = e.target.result;
            sessionStorage.setItem("codeText",content);
        };

        reader.readAsText(file);
        
    }
    document.getElementById("fileInfo").style.display = "flex";
    document.getElementById("reviewBtn").style.display = "block";
    document.getElementById("uploadBtn").innerHTML = "Change File";
    document.getElementById("pasteBtn").style.display = "none";
    document.getElementById("fileName").innerHTML = file.name;
    const fileNameArray = file.name.split('.');
    let fileName = fileNameArray[0];
    let extensionName = fileNameArray.pop();
    sessionStorage.setItem("codeFileName",fileName);
    sessionStorage.setItem("codeExtension",extensionName);
    //Set icon according to extension
    setIcon(extensionName);
    setBorder(extensionName);

});

pasteBtn.addEventListener('click', async () => {
  try 
  {
    const text = await navigator.clipboard.readText()
    document.querySelector('textarea').value = text;
  }
  catch (error) 
  {
    
    document.querySelector('textarea').focus();
    const result = document.execCommand('paste')
   
  }
});
function setIcon(extension)
{
 
   if(extension === "css")
   {
    document.getElementById("icon").src = "images/css.png";
    document.getElementById("icon").style.width = "80px";
   }
   else if(extension === "go")
   {
    document.getElementById("icon").src = "images/goborder.png";
    document.getElementById("icon").style.width = "100px";
   }
   else if(extension === "java")
   {
     document.getElementById("icon").src = "images/java.png";
     document.getElementById("icon").style.width = "70px";
   }
   else if(extension === "js")
   {
     document.getElementById("icon").src = "images/javascript.png";
     document.getElementById("icon").style.width = "95px";
   }
   else if(extension === "php")
   {
     document.getElementById("icon").src = "images/php.png";
     document.getElementById("icon").style.width = "100px";
   }
   else if(extension === "rb")
   {
     document.getElementById("icon").src = "images/ruby.png";
     document.getElementById("icon").style.width = "98px";
   }
   else if(extension === "sql")
   {
     document.getElementById("icon").src = "images/sql.png";
     document.getElementById("icon").style.width = "80px";
   }  
   else if(extension === "swift")
   {
     document.getElementById("icon").src = "images/swift.png";
     document.getElementById("icon").style.width = "98px";
   }
   else if(extension === "ts")
   {
     document.getElementById("icon").src = "images/typescript.png";
     document.getElementById("icon").style.width = "95px";
    }
   else if(extension === "cs")
   {
     document.getElementById("icon").src = "images/csharp.png";
     document.getElementById("icon").style.width = "85px";
    }
   else if(extension === "cpp")
   {
     document.getElementById("icon").src = "images/cpp.png";
     document.getElementById("icon").style.width = "85px";
   }
   else if(extension === "py")
   {
     document.getElementById("icon").src = "images/python.png";
     document.getElementById("icon").style.width = "85px";
   }
   else
   {
     document.getElementById("icon").src = "images/error.png";
     document.getElementById("icon").style.width = "100px";
   }
}

function openMenu()
{
    document.getElementById("menu").style.height = "100%";
    document.getElementById("navigation").style.display = "inline";
}
function closeMenu()
{
    document.getElementById("menu").style.height = "0%";
    document.getElementById("navigation").style.display = "none";
}
function selectLanguage(name)
{
    if(name === "css")
    {
       document.getElementById("css").style.border = "2px solid white";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/css.png";
       document.getElementById("icon").style.width = "80px";
       document.getElementById("secicon").src = "images/css.png";
       document.getElementById("secicon").style.width = "80px";

    }
    else if(name === "go")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "2px solid white";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/goborder.png";
       document.getElementById("icon").style.width = "100px";
       document.getElementById("secicon").src = "images/goborder.png";
       document.getElementById("secicon").style.width = "100px";
     
       
    }
    else if(name === "java")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "2px solid white";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/java.png";
       document.getElementById("icon").style.width = "70px";
       document.getElementById("secicon").src = "images/java.png";
       document.getElementById("secicon").style.width = "70px";

      }
    else if(name === "javascript")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "2px solid white";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/javascript.png";
       document.getElementById("icon").style.width = "95px";
       document.getElementById("secicon").src = "images/javascript.png";
       document.getElementById("secicon").style.width = "95px";

    }
    else if(name === "php")
    {
        document.getElementById("css").style.border = "none";
        document.getElementById("go").style.border = "none";
        document.getElementById("java").style.border = "none";
        document.getElementById("javascript").style.border = "none";
        document.getElementById("php").style.border = "2px solid white";
        document.getElementById("ruby").style.border = "none";
        document.getElementById("sql").style.border = "none";
        document.getElementById("swift").style.border = "none";
        document.getElementById("typescript").style.border = "none";
        document.getElementById("csharp").style.border = "none";
        document.getElementById("cpp").style.border = "none";
        document.getElementById("python").style.border = "none";
        document.getElementById("nodejs").style.border = "none";
        document.getElementById("icon").src = "images/php.png";
        document.getElementById("icon").style.width = "100px";
        document.getElementById("secicon").src = "images/php.png";
        document.getElementById("secicon").style.width = "100px";
      }
    else if(name === "ruby")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "2px solid white";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/ruby.png";
       document.getElementById("icon").style.width = "98px";
       document.getElementById("secicon").src = "images/ruby.png";
       document.getElementById("secicon").style.width = "98px";
    }
    else if(name === "sql")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "2px solid white";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/sql.png";
       document.getElementById("icon").style.width = "80px";
       document.getElementById("secicon").src = "images/sql.png";
       document.getElementById("secicon").style.width = "80px";
    }
    else if(name === "swift")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "2px solid white";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/swift.png";
       document.getElementById("icon").style.width = "98px";
       document.getElementById("secicon").src = "images/swift.png";
       document.getElementById("secicon").style.width = "98px";
    }
    else if(name === "typescript")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "2px solid white";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/typescript.png";
       document.getElementById("icon").style.width = "95px";
       document.getElementById("secicon").src = "images/typescript.png";
       document.getElementById("secicon").style.width = "95px";
    }
    else if(name === "csharp")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "2px solid white";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/csharp.png";
       document.getElementById("icon").style.width = "85px";
       document.getElementById("secicon").src = "images/csharp.png";
       document.getElementById("secicon").style.width = "85px";
    }
    else if(name === "cpp")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "2px solid white";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/cpp.png";
       document.getElementById("icon").style.width = "85px";
       document.getElementById("secicon").src = "images/cpp.png";
       document.getElementById("secicon").style.width = "85px";
    }
    else if(name === "python")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "2px solid white";
       document.getElementById("nodejs").style.border = "none";
       document.getElementById("icon").src = "images/python.png";
       document.getElementById("icon").style.width = "85px";
       document.getElementById("secicon").src = "images/python.png";
       document.getElementById("secicon").style.width = "85px";
    }
    else if(name === "nodejs")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "2px solid white";
       document.getElementById("icon").src = "images/nodejs.png";
       document.getElementById("icon").style.width = "90px";
       document.getElementById("secicon").src = "images/nodejs.png";
       document.getElementById("secicon").style.width = "90px";
    }
}
function setBorder(ExtensionName)
{
    if(ExtensionName === "css")
    {
       document.getElementById("css").style.border = "2px solid white";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
    }
    else if(ExtensionName === "go")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "2px solid white";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       
 
     
       
    }
    else if(ExtensionName === "java")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "2px solid white";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       
    }
    else if(ExtensionName === "js")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "2px solid white";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       
    }
    else if(ExtensionName === "php")
    {
        document.getElementById("css").style.border = "none";
        document.getElementById("go").style.border = "none";
        document.getElementById("java").style.border = "none";
        document.getElementById("javascript").style.border = "none";
        document.getElementById("php").style.border = "2px solid white";
        document.getElementById("ruby").style.border = "none";
        document.getElementById("sql").style.border = "none";
        document.getElementById("swift").style.border = "none";
        document.getElementById("typescript").style.border = "none";
        document.getElementById("csharp").style.border = "none";
        document.getElementById("cpp").style.border = "none";
        document.getElementById("python").style.border = "none";
        document.getElementById("nodejs").style.border = "none";

    }
    else if(ExtensionName === "rb")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "2px solid white";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";

    }
    else if(ExtensionName === "sql")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "2px solid white";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       
    }
    else if(ExtensionName === "swift")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "2px solid white";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";
       
    }
    else if(ExtensionName === "ts")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "2px solid white";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";


    }
    else if(ExtensionName === "cs")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "2px solid white";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";

  }
    else if(ExtensionName === "cpp")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "2px solid white";
       document.getElementById("python").style.border = "none";
       document.getElementById("nodejs").style.border = "none";


    }
    else if(ExtensionName === "py")
    {
        document.getElementById("css").style.border = "none";
       document.getElementById("go").style.border = "none";
       document.getElementById("java").style.border = "none";
       document.getElementById("javascript").style.border = "none";
       document.getElementById("php").style.border = "none";
       document.getElementById("ruby").style.border = "none";
       document.getElementById("sql").style.border = "none";
       document.getElementById("swift").style.border = "none";
       document.getElementById("typescript").style.border = "none";
       document.getElementById("csharp").style.border = "none";
       document.getElementById("cpp").style.border = "none";
       document.getElementById("python").style.border = "2px solid white";
       document.getElementById("nodejs").style.border = "none";
       
    }
    
}
function prepareForPaste()
{
  document.getElementById("uploadBtn").style.display = "none";
  document.getElementById("codePaste").style.padding = "25px"; 
  document.getElementById("codePaste").style.height = "400px";
  document.getElementById("codePaste").style.width = "70vw";
  document.getElementById("langChoser").style.display = "flex";
  document.getElementById("reviewBtnPaste").style.display = "block";
}
function SaveDataFromInput()
{
   codeInput = document.getElementById("codePaste").value;
   sessionStorage.setItem("codeText",codeInput);
   if(HasBorder(document.getElementById("css")))
   {
        const extension = "css";
        sessionStorage.setItem("codeExtension",extension);

   }
   else if(HasBorder(document.getElementById("go")))
   {
    const extension = "go";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("java")))
   {
    const extension = "java";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("javascript")))
   {
    const extension = "js";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("php")))
   {
    const extension = "php";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("ruby")))
   {
    const extension = "rb";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("sql")))
   {
    const extension = "sql";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("swift")))
   {
    const extension = "swift";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("typescript")))
   {
    const extension = "ts";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("csharp")))
   {
    const extension = "cs";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("cpp")))
   {
    const extension = "cpp";
    sessionStorage.setItem("codeExtension",extension);
   }
   else if(HasBorder(document.getElementById("python")))
   {
    const extension = "py";
    sessionStorage.setItem("codeExtension",extension);
   }
}
function HasBorder(element)
{
  const button = element;
  const computedStyle = window.getComputedStyle(button);
  const hasBorder = parseFloat(computedStyle.borderWidth) > 0;

  if(hasBorder)
  {
    return true;
  }
  else
  {
    return false;
  }
}
