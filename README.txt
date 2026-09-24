INTERNAL MEDICINE TRAINING CONSOLE  -  WEBSITE (V30)
===================================================
Department of Internal Medicine, College of Medicine, Al-Mustansiriyah University
Dr. Ammar Waham Ashor

This is the V30 console, made
to run as a website. It has no Attendance tab.
It holds the Clinical Console, Rota Builder, Teaching Console and Exam Schedule.
Residents open one web address on a phone, tablet or computer and always see
the latest schedules. You update it as often as you like, daily or weekly.

Attendance is not part of the website. It needs the lecture computer and its
Wi-Fi, so keep using the V24 web-app folder for that.


REPLACING THE OLDER VERSION ON GITHUB  (older version -> V30)
---------------------------------------------------
Your existing address, residents' password and editor PIN all keep working.
1. Open your repository on github.com > "Add file" > "Upload files".
2. Drag in these files from this folder, replacing the old ones:
     index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png,
     apple-touch-icon.png, .nojekyll
   (.nojekyll is hidden on a Mac: in the folder press Cmd+Shift+. to show it.)
   Do NOT delete schedule-data.json on GitHub: V30 reads the same file.
3. Press "Commit changes". Within 1 to 10 minutes residents get V30 the next
   time they open or refresh the page (phones that installed it included).

What changed in V30:
  - Order of names inside a cell (Clinical Console and Exam Schedule):
    while editing, press the small arrow on a name to move it one place
    earlier, or drag a name onto another name in the same cell to put it
    before that name.
  - The name card (hovering over a tutor or examiner) no longer stops
    working after a name has been dragged to another cell.
  - The Clinical Console reopens on the stage you were last viewing.

What changed in V29:
  - Publish now also sends your colour theme, font and day colours (the
    tick "Colour theme, font and day colours"). The website opens in the
    same colours as your editor browser. A resident who picks another
    theme with the Theme button keeps their own choice.
  - The Teaching Console is now Teaching Console V6, without the Student
    name / ID box or the statistics line. Ticks and notes made in the old
    Teaching Console on the same device are carried over.

What changed in V28:
  - Teaching Console: no "Marking for / Student / ID" box, no Students
    button, no statistics line under the title (50 core tutorials ...
    Offline · saves on this device), no "Combined" tab, and
    "Core Curriculum" is now "Tutorials".
  - Clinical Console: printing with Ctrl+P / Cmd+P now follows the print
    options (the workload section is left out when its tick is off).
  - Residents no longer see the "fill dates" and "add day" buttons in the
    Exam Schedule.


HOW IT WORKS
------------
The website has two modes. Each browser remembers its own mode.

  VIEWER (residents, the default)
    Every time the page opens, it loads the current schedules from the file
    schedule-data.json on the website. All editing buttons are hidden.
    The top bar shows "Updated <date and time>". If you wrote a notice, it
    appears under the tabs until the resident closes it.
    With no connection, it shows the last schedules the device loaded.

  EDITOR (you)
    Open the website once with  ?editor  at the end of the address, e.g.
        https://yourname.github.io/im-console/?editor
    That browser is now an editor and stays one. Everything can be edited as
    before, and there is a "Publish" button in the top bar.

RESIDENTS' PASSWORD
    The schedules and the notice are published encrypted. The first time a
    phone, tablet or computer opens the site it asks for the residents'
    password; after that the device remembers it. Without the password
    nobody can read the schedules, on the website or on GitHub.
    Set it in "Publish" > "Residents' password" (at least 8 characters),
    then publish and upload. Publishing is not possible until one is set.
    To change it (e.g. if it has been passed around), set a new one,
    publish, upload, and give residents the new password: each device asks
    once more. The built-in example timetable in the page has no names.

EDITOR PIN
    In "Publish" there is an "Editor PIN" section: type a PIN (at least 6
    letters or numbers) twice and press "Set PIN", then publish and upload
    as usual. From then on, anyone who adds ?editor sees a PIN box. Without
    the PIN they can only press "View only". Your own editor browser is not
    asked again. To change the PIN, set a new one the same way and publish.
    Residents never need the PIN.
    The PIN only hides the editing screens. What protects the website is
    your GitHub account: nobody can change what residents see without
    signing in to it (use a strong password and two-factor authentication).

Your edits stay in your browser until you publish. Publishing saves one file,
schedule-data.json. Upload it to the website, replacing the old one, and every
resident sees it the next time they open or refresh the page.


WHAT IS PUBLISHED (and what never is)
-------------------------------------
Publish lets you tick:
  [x] Clinical Console        [x] Rota Builder        [x] Exam Schedule
  [x] Colour theme, font and day colours
  [ ] Tutors' weekly duties (off by default: these are personal timetables)
There is also a box for a short notice to residents.

NEVER published: Teaching Console ticks and notes, and attendance records.

The Teaching Console has NO students: no roster, no per-student marking, no
marks export and no Google Sheets sync. It is the tutorials, data
interpretation, skills lab and ward cases, with the checklist and handout.
A session ticked there as delivered is saved only on that device.

GitHub keeps every earlier version of an uploaded file. If you ever uploaded
a schedule-data.json BEFORE the residents' password existed, anyone can
still read that old copy in the repository's history. To remove it: delete
the repository (Settings > Danger Zone > Delete this repository), create it
again with the SAME name, upload the files and turn Pages on again. The
address stays the same.


ONE-TIME SET-UP  (GitHub Pages: free, about 15 minutes)
-------------------------------------------------------
1. Create a free account at https://github.com
2. Top right "+" > "New repository". Name it, e.g.  im-console
   Choose "Public" (free GitHub Pages needs a public repository). Create.
3. On the new repository page: "uploading an existing file". Drag in ALL the
   files from this folder: index.html, sw.js, manifest.webmanifest,
   icon-192.png, icon-512.png, apple-touch-icon.png, .nojekyll
   (not this README if you prefer).
   (.nojekyll is hidden on a Mac: in the folder press Cmd+Shift+. to show it.)
   Press "Commit changes".
4. Settings > Pages > "Build and deployment": Source = "Deploy from a branch",
   Branch = "main", folder "/ (root)". Save.
5. After a minute or two the address appears at the top of that page, e.g.
       https://yourname.github.io/im-console/
   That is the address for residents. Put it in a QR code or the group chat.

Other free hosts work just as well (Netlify, Cloudflare Pages). Any host that
serves plain files will do. With those you drag the whole folder in to update.


MOVE YOUR DATA IN  (once)
-------------------------
1. Open the V24 web app, or the V30 console file > "Backup". A .json file
   is saved.
2. Open the website with ?editor at the end of the address.
3. "Restore" > "Restore from backup file..." > choose that file.
   Your Clinical Console, Rota, Exam Schedule, duties and theme are now in
   the editor browser.
4. "Publish" > "Save schedule-data.json", then upload it (next section).


EVERY UPDATE  (daily, weekly, whenever)
---------------------------------------
1. Open the website with ?editor (your editor browser remembers it).
2. Make the changes.
3. "Publish". (First time: set the residents' password and editor PIN.)
   Tick what to include, write a notice if you want one
   (e.g. "Tuesday ward round moved to 10:00"), press "Save schedule-data.json".
4. On GitHub: open the repository > "Add file" > "Upload files" > drag in
   schedule-data.json > "Commit changes". It replaces the old file.
   The website shows it within about 1 to 10 minutes.
   The file name must be exactly  schedule-data.json.  If the browser saved it
   as "schedule-data (1).json", rename it first.

Residents do not need to do anything. The page checks for the new file each
time it opens.


GOOD TO KNOW
------------
- The editor browser is the only place your unpublished edits live. Keep
  pressing "Backup" as before.
- You can be an editor on more than one computer. On a new one, open
  ?editor. It starts from the published version. "Publish" > "Load the
  website version here" brings an editor up to date with the website.
- "Publish" > "Leave editor mode" turns that browser back into a viewer.
  Unpublished edits there are then replaced by the website version.
- Phones and tablets: open the address, then
    iPhone/iPad (Safari): Share > "Add to Home Screen"
    Android (Chrome):     menu > "Add to Home screen" / "Install app"
  It then opens like an app and still shows the last schedules when offline.
- Printing works as before (the notice and top-bar buttons do not print).
- Opening index.html straight from this folder shows the built-in example
  schedules only. The published schedules load when it is opened as a website.


FILES
-----
  index.html             the console (without attendance)
  schedule-data.json     the published schedules (you create it with Publish)
  sw.js, manifest.webmanifest, icon-192.png, icon-512.png,
  apple-touch-icon.png
                         make it installable and let it open offline
  .nojekyll              tells GitHub Pages to serve the files as they are
