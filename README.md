# disciplinary-report
Automatically fill in disciplinary report. The script reads data about the student from your clipboard and data about the teacher and course from `data.json`. And fills in the report .docx file.

The script takes 5-6 arguments, the last argument is optional. See example of running script:

```bash
python3 main.py <date-of-offence> <course-code> <teacher-acronym> <student-acronym> <filname-or-url-to-assignment-instruction> <comma-seperated-string-with-extra-files>

python3 main.py 2020-11-17 DV1531 aar anar12 assignment.pdf code.zip,video.mp4
```

Before running the script you need to do the following:

1. Copy `data.json` and rename it to `local-data.json`

1. Add yourself and your courses to `local-data.json`.

1. Add the .js code from `ladok-booklet.js` as a booklet in your browser.

1. Go to the students page on ladok and the tab `Studentuppgifter`.

1. Activate the booklet and press enter.

1. Install requirements.txt

1. Run the script.

1. Profit!



The script produces a .docx file in `output/` that needs to be converted to a pdf and signed before turning it in. You can use [edusign](https://edusign.sunet.se/open/login) instead of printing and scanning it.

The report expects you to have/create the following files:

- \<student-acronym\>-ladok.pdf # ladok utdrag for student

- <course-code>-kursplan.pdf # course plan

- Beskrivning av ärende.pdf # description of the incident

- <assignment>.pdf # file or link to the assignment. File is named as you entered as argument.



If you hava big files (video) you can't send it via email, instead upload it to [bth.box.com](https://bth.box.com) and link to that in email.



Read about [report process](https://bthse.sharepoint.com/Sidor/Anm%C3%A4lan.aspx).



# TO-DO

- Download kursplan from [bth.se](http://edu.bth.se/utbildning/utb_kursplaner.asp?KKurskod=DV1531). Should be able to use the `request` module and send GET request.

- Make booklet click buttons. So it can go from startpage to right page. And also possibly find course info from ladok.

- Generate pdf using docker?
