const titles = ["this 🐶 is the best", "this dog is the best", "thisdogisthe.best", "the best dog!!1!1", "🐶", "we love dogs", "doggy!!!!", "the best 🐶"]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function change() {
  while (true) {
    document.title = titles[Math.floor(Math.random()*titles.length)]
    await sleep(100)
  }
}

change();
