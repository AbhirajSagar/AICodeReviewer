const endtemplate = "without saying anything else except the answer";

getCodeStats();
SetUpFileDisplay();
getIntention();
getIssue();



//Functions :
function refresh()
{
    codetext = document.getElementById("codeWindow").innerHTML;
    sessionStorage.setItem("codeText",codetext);
    location.reload(true);
}
function disableApiWindow(value)
{
    document.getElementById("keyLoadDisplay").style.display = "none";

}
function SetUpFileDisplay()
{
        const FileNameElement = document.getElementById("fileName");
        const FileName = sessionStorage.getItem("codeFileName");
        const CodeExtension = sessionStorage.getItem("codeExtension");
        if(FileName !== null)
        {
            if(CodeExtension !== null)
            {
                const filename = `${FileName}.${CodeExtension}`;
                FileNameElement.innerHTML = filename;
            }
        }
        else
        {
            if(CodeExtension !== null)
            {
                sessionStorage.setItem("codeFileName","MyFile");
                const fileName = `MyFile.${CodeExtension}`;
                FileNameElement.innerHTML = fileName;
            }
            
        }
}
function openRating()
{
    document.getElementById("ratingWindow").style.width = "65%";
    document.getElementById("ratingWindow").style.height = "85%";
    document.getElementById("ratingWindow").style.padding = "10px";
    document.getElementById("ratingWindow").style.border = "2px solid #2a9cd9";
}
function openSuggestions()
{
    document.getElementById("suggestionsWindow").style.width = "60%";
    document.getElementById("suggestionsWindow").style.height = "80%";
    document.getElementById("suggestionsWindow").style.padding = "15px";
    document.getElementById("suggestionsWindow").style.paddingBottom = "20px";
    document.getElementById("suggestionsWindow").style.border = "2px solid #2a9cd9";
}
function closeRating()
{
    document.getElementById("ratingWindow").style.width = "0%";
    document.getElementById("ratingWindow").style.height = "0%";
    document.getElementById("ratingWindow").style.padding = "0px";
    document.getElementById("ratingWindow").style.border = "none";
}
function closeSuggestions()
{
    document.getElementById("suggestionsWindow").style.width = "0%";
    document.getElementById("suggestionsWindow").style.height = "0%";
    document.getElementById("suggestionsWindow").style.padding = "0px";
    document.getElementById("suggestionsWindow").style.border = "none";
}
function openSettings()
{
    document.getElementById("settingsWindow").style.width = "fit-content";
    document.getElementById("settingsWindow").style.height = "fit-content";
    document.getElementById("settingsWindow").style.padding = "25px";
    document.getElementById("settingsWindow").style.border = "2px solid #2a9cd9";
}
function closeSettings()
{
    document.getElementById("settingsWindow").style.width = "0";
    document.getElementById("settingsWindow").style.height = "0";
    document.getElementById("settingsWindow").style.padding = "0";
    document.getElementById("settingsWindow").style.border = "none";
}
function toggleVisibility()
{
    if(document.getElementById("visibleBtn").style.border === "2px solid black")
    {
        document.getElementById("visibleBtn").style.border = "none";
        document.getElementById("keyInput").type = "password";
    }
    else
    {
        document.getElementById("visibleBtn").style.border = "2px solid black";
        document.getElementById("keyInput").type = "text";
    }
}
function toggleSideNav()
{
    const sidenavdiv = document.getElementById("sidenav");
    const codewindow = document.getElementById("codewindow");
    if(sidenavdiv.style.padding === "10px")
    {
        //Is Open
        sidenavdiv.style.width = "0px";
        sidenavdiv.style.padding = "0px";
        codewindow.style.width = "100%";
    }
    else
    {
        //Is Closed
        sidenavdiv.style.padding = "10px";
        sidenavdiv.style.width = "30%";
        codewindow.style.width = "69%";
    }
}
function SaveKey()
{

     const key = document.getElementById("keyInput").value;
     if(key !== null && key !== null)
     {
                document.getElementById("keyLoadDisplay").style.display = "block";
                

                const prompt = `tell me the smallest even number ${endtemplate}`;
                let output;
                getResponse(prompt,key).then(data => {
                        const dataReceived = JSON.parse(data);
                        output = dataReceived.choices[0].message.content;
                        if(output === "2")
                        {
                            document.getElementById("keyVerificationStatus").innerHTML = "API Key Verified";
                            localStorage.setItem("GPTKEY",key);
                            setTimeout(closeSettings,2000);
                            setTimeout(disableApiWindow,3000);
                            document.getElementById("keyInput").value = "";
                        }
                        else
                        {
                            document.getElementById("keyVerificationStatus").innerHTML = "Invalid API Key";
                            setTimeout(closeSettings,2000);
                            setTimeout(disableApiWindow,3000);
                            document.getElementById("keyInput").value = "";

                        }
                    })
                    .catch(error => {
                        output = "No API Key Found";
                    });
     }
    
     
}
function getCodeStats()
{
    document.getElementById("averageCodeStats").innerHTML = "Loading";
    document.getElementById("efficiencyTxt").innerHTML = "Loading";
    document.getElementById("readabilityTxt").innerHTML = "Loading";
    document.getElementById("reusabilityTxt").innerHTML = "Loading";
    document.getElementById("scalabilityTxt").innerHTML = "Loading";
    const code = document.getElementById("codeWindow").innerHTML;
    const extension = sessionStorage.getItem("codeExtension");
    const prompt = `this is .${extension} code : ${code}   Rate this from 1.0-9.99 code based on efficiency,readability,reusability,scalability separated by commas,without saying anything else except the numbers`;
    const key = localStorage.getItem("GPTKEY");
    let output;
    getResponse(prompt,key).then(data => 
        {
            console.log(data);
            const dataReceived = JSON.parse(data);
            outputpre = dataReceived.choices[0].message.content;
            output = filterNumbers(outputpre);
            const scores = output.split(" ");
            const effi = parseFloat(scores[0]);
            const read = parseFloat(scores[1]);
            const reus = parseFloat(scores[2]);
            const scal = parseFloat(scores[3]);
            const average = ((effi + read + reus + scal)/4.0).toFixed(1);

            document.getElementById("averageCodeStats").innerHTML = average;
            document.getElementById("efficiencyTxt").innerHTML = effi;
            document.getElementById("readabilityTxt").innerHTML = read;
            document.getElementById("reusabilityTxt").innerHTML = reus;
            document.getElementById("scalabilityTxt").innerHTML = scal;
        })
        .catch(error =>
        {
            document.getElementById("averageCodeStats").style.fontSize = "1.2rem";
            document.getElementById("averageCodeStats").innerHTML = "No API Key Found";
            console.log(error);
        });
}
function AutoComment()
{
    const code = document.getElementById("codeWindow").innerHTML;
    document.getElementById("loading").style.display = "inline";
    const extension = sessionStorage.getItem("codeExtension");
    const prompt = `Add comments to this .${extension} code : ${code}  and give back only the code with comments`;
    const key = localStorage.getItem("GPTKEY");
    let output;
    getResponse(prompt,key).then(data => 
        {
            const dataReceived = JSON.parse(data);
            outputpre = dataReceived.choices[0].message.content;
            output = getStringBetweenBackticks(outputpre);
            sessionStorage.setItem("codeText",output);
            document.getElementById("loading").display = "inline";

            location.reload(true);

        })
        .catch(error =>
        {
           document.getElementById("codeWindow").innerHTML = "No API Key Found";
        });
}
function getIntention()
{
    const code = document.getElementById("codeWindow").innerHTML;
    document.getElementById("intentionTxt").innerHTML = "Loading....";
    const extension = sessionStorage.getItem("codeExtension");
    const prompt = `Tell me what i am trying to achieve through this .${extension} code in 30-50 words : ${code}`;
    const key = localStorage.getItem("GPTKEY");
    let output;
    getResponse(prompt,key).then(data => 
        {
            const dataReceived = JSON.parse(data);
            output = dataReceived.choices[0].message.content;
            document.getElementById("intentionTxt").innerHTML = output;
        })
        .catch(error =>
        {
            document.getElementById("intentionTxt").innerHTML = "No API Key Found";
        });
}
function showDrop()
{
    if(document.getElementById("expandIcon").innerHTML === "expand_more")
    {
        document.getElementById("intentionTxt").style.height = "200px";
        //document.getElementById("intentionTxt").style.width = "90%";
        document.getElementById("intentionTxt").style.padding = "10px";
        document.getElementById("intentionTxt").style.marginTop = "20px";
        document.getElementById("expandIcon").innerHTML = "expand_less";
    }
    else if(document.getElementById("expandIcon").innerHTML === "expand_less")
    {
        document.getElementById("intentionTxt").style.height = "0px";
      //  document.getElementById("intentionTxt").style.width = "0%";
        document.getElementById("intentionTxt").style.padding = "0px";
        document.getElementById("intentionTxt").style.marginTop = "0px";
        document.getElementById("expandIcon").innerHTML = "expand_more";
    }
}
function showIssueDrop()
{
    if(document.getElementById("expandIssueIcon").innerHTML === "expand_more")
    {
        document.getElementById("issueTxt").style.height = "100px";
        document.getElementById("issueTxt").style.padding = "10px";
        document.getElementById("issueTxt").style.marginTop = "20px";
        document.getElementById("expandIssueIcon").innerHTML = "expand_less";
    }
    else if(document.getElementById("expandIssueIcon").innerHTML === "expand_less")
    {
        document.getElementById("issueTxt").style.height = "0px";
        document.getElementById("issueTxt").style.padding = "0px";
        document.getElementById("issueTxt").style.marginTop = "0px";
        document.getElementById("expandIssueIcon").innerHTML = "expand_more";
    }
}
function getIssue()
{
    const code = document.getElementById("codeWindow").innerHTML;
    document.getElementById("issueTxt").innerHTML = "Loading....";
    const extension = sessionStorage.getItem("codeExtension");
    const prompt = `Give the major issue with this .${extension} code in 30-40 words : ${code},if there's no issue,say 'No Issue' `;
    const key = localStorage.getItem("GPTKEY");
    let output;
    getResponse(prompt,key).then(data => 
        {
            const dataReceived = JSON.parse(data);
            output = dataReceived.choices[0].message.content;
            document.getElementById("issueTxt").innerHTML = output;
        })
        .catch(error =>
        {
           document.getElementById("issueTxt").innerHTML = "No API Key Found";
        });
}
function getSuggestion()
{
    let code;
    document.getElementById("sg1Btn").disabled = true;
    document.getElementById("sg1Btn").innerHTML = "Apply";

    document.getElementById("sg2Btn").disabled = true;
    document.getElementById("sg2Btn").innerHTML = "Apply";

    document.getElementById("sg3Btn").disabled =  true;
    document.getElementById("sg3Btn").innerHTML = "Apply";

  
    if(document.getElementById("codeWindow").innerHTML === "Loading....")
    {
        //Do something if other functions had consumed codeWindow
        console.log("Others functions had consumed the code window")
    }
    else
    {
        code = document.getElementById("codeWindow").innerHTML;
    }   
    document.getElementById("sg1").innerHTML = "Loading....";
    document.getElementById("sg2").innerHTML = "Loading....";
    document.getElementById("sg3").innerHTML = "Loading....";
    const extension = sessionStorage.getItem("codeExtension");
    const prompt = `How to improve this .${extension} code : ${code} . give me 3 suggestions (max 10 words each) SEPARATED BY COMMAS without saying anything else except the suggestion`;
    const key = localStorage.getItem("GPTKEY");
    let output;
    getResponse(prompt,key).then(data => 
        {
            const dataReceived = JSON.parse(data);
            let outputWithNumbers = dataReceived.choices[0].message.content;
            console.log(output);
            output = outputWithNumbers.replace(/\d/g, '&');
            let suggestions = output.split('&');
            let sg1 = suggestions[1].trim();
            let sg1f = sg1.replace('.','');
            let sg2 = suggestions[2].trim();
            let sg2f = sg2.replace('.','');
            let sg3 = suggestions[3].trim();
            let sg3f = sg3.replace('.','');

            document.getElementById("sg1").innerHTML = sg1f;
            document.getElementById("sg1Btn").disabled = false;
            document.getElementById("sg2").innerHTML = sg2f;
            document.getElementById("sg2Btn").disabled = false;
            document.getElementById("sg3").innerHTML = sg3f;
            document.getElementById("sg3Btn").disabled = false;

        })
        .catch(error =>
        {
           document.getElementById("sg1").innerHTML = "No API Key Found";
           document.getElementById("sg2").innerHTML = "No API Key Found";
           document.getElementById("sg3").innerHTML = "No API Key Found";

        }); 
}
function applySuggestion(element)
{
    let suggestion;
    document.getElementById("loading").style.display = "inline";
    if(element === "sg1")
    {
        document.getElementById("sg1Btn").innerHTML = "Applying..";
    }
    else if(element === "sg2")
    {
        document.getElementById("sg2Btn").innerHTML = "Applying..";
    }
    else if(element === "sg3")
    {
        document.getElementById("sg3Btn").innerHTML = "Applying..";
    }
    const code = document.getElementById("codeWindow").innerHTML;
    if(document.getElementById(element).innerHTML === "Loading..." || document.getElementById(element).innerHTML === "")
    {

    }
    else
    {
         suggestion = document.getElementById(element).innerHTML;
    }
    const extension = sessionStorage.getItem("codeExtension");
    const prompt = `Apply the following suggestion to this .${extension} code : ${suggestion} This is the code : ${code} Give back only the code`;
    const key = localStorage.getItem("GPTKEY");
    let output;
    getResponse(prompt,key).then(data => 
        {
            const dataReceived = JSON.parse(data);
            let output = dataReceived.choices[0].message.content;
            document.getElementById("codeWindow").innerHTML = output;
            if(element === "sg1")
            {
                document.getElementById("sg1Btn").innerHTML = "Applied";
                document.getElementById("sg1Btn").disabled  = true;
 
            }
            else if(element === "sg2")
            {
                document.getElementById("sg2Btn").innerHTML = "Applied";
                document.getElementById("sg2Btn").disabled  = true;

            }
            else if(element === "sg3")
            {
                document.getElementById("sg3Btn").innerHTML = "Applied";
                document.getElementById("sg3Btn").disabled  = true;

            }
            document.getElementById("loading").style.display = "none";

        })
        .catch(error =>
        {
            document.getElementById("codeWindow").innerHTML = "No API Key Found";
        }); 
}
function filterNumbers(inputString)
{
    // Use a regular expression to match numbers
    const numbersOnly = inputString.match(/\d+/g);

    // Join the matched numbers into a new string
    const resultString = numbersOnly ? numbersOnly.join(' ') : '';

    return resultString;
}
function getStringBetweenBackticks(inputString) 
{
    // Split the string by the "$" sign
    const parts = inputString.split('```');

    // Check if there are at least two parts (i.e., a "$" sign was found)
    if (parts.length >= 2) {
        // Take the second part, which is the string between the "$" signs
        const resultString = parts[1].trim();
        return resultString;
    } else {
        // Return an empty string or handle the case where no "$" sign is found
        return inputString;
    }
}
async function getResponse(prompt,key)
{
        const apiKey = key;
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        const requestBody = {messages : [{role: "user", content: prompt}],max_tokens: 1000,model: "gpt-3.5-turbo",};

        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        },

        body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        const jsonString = JSON.stringify(data);

        return jsonString;
        
}