const refreshIcons = document.querySelectorAll('[original-title="Փոփոխել"]');

let i = +localStorage.getItem('count') || 0;
const update = () => {
  if (refreshIcons.length && i < refreshIcons.length) {
    if (+refreshIcons.length === +i) {
      localStorage.removeItem('count');
      return;
    }

    refreshIcons[i].click();
  }

  const button = document.querySelector('.btncancel');

  if (button) {
    localStorage.setItem('count', `${i++}`);

    setTimeout(() => {

      button.click();
      update();
    }, 3000);
  }
};

update();

// chrome.action.onClicked.addListener(async (tab) => {
//   console.log(chrome, 6666);
//   console.log(tab, 888888);
//
//
//   const pageHTML = await fetch('https://www.list.am/my').then(res => {
//     console.log(res.text().then(r => {
//       console.log(r, 3333);
//
//       const searchString = 'title="Թարմացնել';
//       const regex = new RegExp(searchString, 'gi');
//       const occurrences = r.match(regex) || [];
//
//       console.log(occurrences, 9999);
//
//       // const parser = new DOMParser();
//       // const doc = parser.parseFromString(r, 'text/html');
//       //
//       // console.log(doc, 9999);
//       const elementsWithSpecificTitle = r.querySelectorAll('[title="Թարմացնել"]');
//
//       console.log(elementsWithSpecificTitle, 4444);
//     }),);
//   });
//
//   if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
//     // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//     const prevState = await chrome.action.getBadgeText({tabId: tab.id});
//     // Next state will always be the opposite
//     const nextState = prevState === 'ON' ? 'OFF' : 'ON'
//
//     // Set the action badge to the next state
//     await chrome.action.setBadgeText({
//       tabId: tab.id,
//       text: nextState,
//     });
//
//     if (nextState === "ON") {
//       // Insert the CSS file when the user turns the extension on
//       await chrome.scripting.insertCSS({
//         files: ["focus-mode.css"],
//         target: {tabId: tab.id},
//       });
//     } else if (nextState === "OFF") {
//       // Remove the CSS file when the user turns the extension off
//       await chrome.scripting.removeCSS({
//         files: ["focus-mode.css"],
//         target: {tabId: tab.id},
//       });
//     }
//   }
// });
