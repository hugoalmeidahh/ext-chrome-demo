function Init() async {
  let [tab] = await chrome.tabs.query({active:true, currentWindow: true});

  console.log(tab);

}

Init()