[![Alt text](https://github.com/nicoodakp/snap-and-clarifai-master/blob/master/128.png?raw=true)](https://youtu.be/c0L_1zuz5jU)

# snap-and-clarifai-master

1. When watching video or youtube, tab the app and it will take video snapshot from the video frame .
2. hit "Predict" and the image will parse to the Claifai API. And retutn celebrity names.
3. Backend javascript do the part of snapshot, where popup.js do the parsing,analysis and feedback result.
4. (fixed)I am still working on the 'onclick' event in popup.js 100:103, the links wont render accordingly. For now the remedy is catDiv.innerHTML from popup.js 86 where I insert a tag 'target =  blank' to the src.

Reference: \
[Clarifai cloud engine](https://www.clarifai.com/models/celebrity-image-recognition-model-e466caa0619f444ab97497640cefc4dc) \
           [clarifai-javascript-starter](https://github.com/Clarifai/javascript-starter) \
<<<<<<< HEAD
           [Yulon](https://chrome.google.com/webstore/detail/video-snapshotscreenshot/fngkpediphdinmlceebdlgbafgccjeaj?hl=en)
=======
           [Yulon](https://chrome.google.com/webstore/detail/video-snapshotscreenshot/fngkpediphdinmlceebdlgbafgccjeaj?hl=en) 
>>>>>>> 107f37aa9239f7f316aaa1bed5edf78b4c3644d4

p.s: I should have clari'fai' I hava not tested on any chrome/mac/linux os yet. my enviroment is windows 10, and I am using jquery 3.3.1.

9/20/18 - fixed the dynamic on.click event
          and some css changes
