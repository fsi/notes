# How to add subtitle track to an mp4 file

This is hard to keep in memory, and the source page might get deleted (and ffmpeg's cli is unlikely to change).

Code:

```bash
ffmpeg -i input.mp4 -i sub.srt -c:v copy -c:a copy -c:s mov_text -metadata:s:s:0 language=eng output.mp4
```

mp4 container works fine with .srt subtitles, with other formats remuxing to mkv might be necessary.

[source](https://mutsinzi.com/add-srt-subtitles-to-quicktime/)