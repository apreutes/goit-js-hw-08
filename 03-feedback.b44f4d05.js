const e=document.querySelector(".feedback-form"),t=document.querySelector("textarea"),a=document.querySelector("input"),r={};!function(){const e=localStorage.getItem("feedback-form-state");e&&(parsedData=JSON.parse(e),t.value=parsedData.message,a.value=parsedData.email,console.log(parsedData))}(),e.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),e.addEventListener("input",(e=>{r[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(r))}));
//# sourceMappingURL=03-feedback.b44f4d05.js.map
