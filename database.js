const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function setupDatabase() {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS mysteries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      final_solution TEXT,
      final_options TEXT
    );

    CREATE TABLE IF NOT EXISTS clues (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mystery_id INTEGER,
      sequence_number INTEGER,
      clue_text TEXT,
      question TEXT,
      answer TEXT,
      FOREIGN KEY(mystery_id) REFERENCES mysteries(id)
    );

    CREATE TABLE IF NOT EXISTS teams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      team_id INTEGER,
      mystery_id INTEGER,
      start_time DATETIME,
      end_time DATETIME,
      current_clue INTEGER DEFAULT 1,
      FOREIGN KEY(team_id) REFERENCES teams(id),
      FOREIGN KEY(mystery_id) REFERENCES mysteries(id)
    );
  `);

  const count = await db.get('SELECT COUNT(*) as count FROM mysteries');
  if (count.count === 0) {
    const mysteries = [
    {
        "title": "Missing Angel",
        "description": "Three undercover agents known as **The Angels**\u2014Aria, Blair, and Casey\u2014are sent on a secret mission by their mysterious handler, **Charlie**.\n\nTheir mission is simple: **retrieve the Crimson Drive before midnight.**\n\nThe drive contains sensitive information about a major operation and is hidden somewhere inside a luxury hotel. Each Angel has a specific role: Aria is the team's tech expert, Blair specializes in disguises, and Casey is responsible for security and combat.\n\nAt **11:20 PM**, Charlie sends the Angels one final message:\n\n> **\"One of you has betrayed the team. The drive is gone. Find out who before midnight.\"**\n\nThe problem is that all three Angels claim they were following Charlie's instructions\u2014and all three have something to hide.\n\nAs the Angels investigate, strange evidence begins to surface. An Angel access code was used to enter a restricted floor. A disguised person was caught on camera. A mysterious photograph was sent to Charlie, and the Crimson Drive was opened using information hidden inside Aria's encrypted files.\n\nThen they discover something even more disturbing: a recording mentioning a **second secret mission** that Charlie claims never existed.\n\nWith time running out, the Angels must piece together the five clues, uncover who betrayed the team, determine how the Crimson Drive was taken, and reveal the truth behind the mysterious second mission.",
        "final_solution": "B",
        "final_options": [
            "Blair stole the Crimson Drive while disguised as a hotel employee and secretly carried out a second mission.",
            "Aria used her access to the hotel's systems to steal the Crimson Drive and secretly carried out the second mission.",
            "Casey stole the Crimson Drive from the maintenance room and framed Aria and Blair using their access and disguises."
        ],
        "clues": [
            {
                "seq": 1,
                "text": "At 10:42 PM, the hotel's security system recorded an Angel access code being used to enter the restricted 12th floor. The access code belonged to Aria, but Aria insists she never left Room 307.",
                "question": "Which built-in Python function is used to find the length of a list or string?",
                "answer": "len"
            },
            {
                "seq": 2,
                "text": "At 10:43 PM, the elevator camera shows a person wearing a hotel employee uniform entering the 12th floor. Their face is hidden, but they are wearing a silver bracelet, similar to the one Blair always wears.",
                "question": "x = 5\nfor i in range(3):\n    x += i\nprint(x)",
                "answer": "8"
            },
            {
                "seq": 3,
                "text": "At 10:51 PM, Charlie receives a message from an unknown number:\n\"The drive isn't where you think it is.\"\nThe message contains a photograph of Casey standing near the back entrance. Casey claims the photograph was taken earlier that evening.",
                "question": "text = \"Crimson\"\nprint(text[1:4])",
                "answer": "rim"
            },
            {
                "seq": 4,
                "text": "The Crimson Drive is discovered inside a locked maintenance room. The lock was opened using a six-digit code that was found hidden inside Aria's encrypted files, suggesting someone had access to her computer.",
                "question": "colors = [\"red\", \"blue\", \"green\"]\ncolors.append(\"black\")\nprint(colors[2])",
                "answer": "green"
            },
            {
                "seq": 5,
                "text": "A hotel audio recording from 10:38 PM captures someone saying:\n\"Charlie doesn't know about the second mission.\"\nAccording to Charlie, there was never supposed to be a second mission. The voice sounds like one of the Angels.",
                "question": "total = 0\nfor n in [10, 20, 30]:\n    if n > 15:\n        total += n\nprint(total)",
                "answer": "50"
            }
        ]
    },
    {
        "title": "The Last Message",
        "description": "Adrian Cole, a software developer working on a confidential project, is found unconscious inside his office late one evening.\n\nHis laptop is missing, along with an important project file stored on it.\n\nSecurity footage shows Adrian working late, but someone entered his office shortly before he was found. Four people had a reason to be involved:\n\nEthan \u2014 Adrian's colleague and project partner. He claims he left the office before Adrian's final meeting.\n\nMaya \u2014 Adrian's close friend. She admits they argued earlier that evening but says she left before anything happened.\n\nRyan \u2014 A former member of Adrian's project team. He had recently been removed from the project and was angry about it.\n\nSophie \u2014 The office administrator. She had access to several rooms and company devices.\n\nEveryone has something to hide.\n\nThen investigators recover a deleted message from Adrian's phone:\n\n\u201cI know you took the file. Meet me at 9:15. Come alone.\u201d\n\nAs more evidence is uncovered, the timeline becomes increasingly suspicious. Someone accessed Adrian's laptop, a mysterious photograph places another person inside his office, and a damaged voice recording reveals a confrontation.\n\nWith Adrian unconscious and the confidential file missing, the team must piece together the evidence and determine:\n\nWho took the file, what happened to Adrian, and who was behind the missing laptop?",
        "final_solution": "A",
        "final_options": [
            "Ethan took the project file, confronted Adrian, and used his credentials to access the missing laptop",
            "Maya took Adrian's laptop after their argument and tried to hide the project file.",
            "Ryan stole the laptop to get revenge after being removed from the project."
        ],
        "clues": [
            {
                "seq": 1,
                "text": "Adrian enters his office at 8:42 PM. At 9:17 PM, someone enters his office. At 9:31 PM, the lights are switched off. No one is seen leaving through the main entrance between 9:30 PM and 9:45 PM.",
                "question": "Which Python keyword is used to define a function?",
                "answer": "def"
            },
            {
                "seq": 2,
                "text": "A recovered message from Adrian's phone says:\n\n\u201cI know you took the file. Meet me at 9:15. Come alone.\u201d\nThe recipient's name had been deleted from Adrian's phone.",
                "question": "s = \"Hello\"\nprint(s[::-1])",
                "answer": "olleH"
            },
            {
                "seq": 3,
                "text": "Adrian's missing laptop is accessed remotely at 9:23 PM. The login uses Ethan's credentials, and the confidential project folder is opened. Ethan claims he never accessed the laptop.",
                "question": "count = 0\nwhile count < 3:\n    count += 1\nprint(count)",
                "answer": "3"
            },
            {
                "seq": 4,
                "text": "A photograph recovered from Adrian's phone was taken at 9:26 PM inside his office. The reflection in a glass cabinet shows another person standing behind Adrian, proving he wasn't alone.",
                "question": "nums = [1, 2, 3]\nnums[1] = 5\nprint(sum(nums))",
                "answer": "9"
            },
            {
                "seq": 5,
                "text": "A damaged recording captures Adrian saying:\n\n\u201cYou shouldn't have taken it.\u201d\n\nThe other person responds:\n\n\u201cYou were never supposed to find out.\u201d\n\nThe voice is later matched to Ethan.",
                "question": "d = {\"a\": 1, \"b\": 2}\nprint(d[\"b\"])",
                "answer": "2"
            }
        ]
    },
    {
        "title": "The Vanishing File",
        "description": "A confidential file named \u201cProject Crimson\u201d has mysteriously disappeared from a secured office.\n\nThe file contains sensitive information about an upcoming project and was stored on a computer that only a few people had permission to access.\n\nThe file was confirmed to be present at 6:30 PM. By 7:15 PM, it was gone.\n\nThree people were inside the office building during that time:\n\nAlex \u2014 A software developer who had been working on Project Crimson. He claims he left the office at 6:45 PM.\n\nMaya \u2014 The project manager. She had full access to the confidential files and claims she left her office at 7:00 PM.\n\nRyan \u2014 A former project member who was recently removed from Project Crimson. He claims he only came back to collect some personal belongings.\n\nSecurity records reveal that someone accessed the confidential file shortly before it disappeared.\n\nThen investigators discover something even more suspicious: the file was not simply deleted.\n\nSomeone copied it to another location.\n\nThe team must use the five clues to determine who stole Project Crimson, how they gained access, and whose credentials were used to hide the theft.",
        "final_solution": "C",
        "final_options": [
            "Alex copied the Project Crimson file using his own access before leaving the office",
            "Maya secretly copied the file using Ryan's access card and attempted to make the theft look like Ryan's work.",
            "Ryan stole the file using Maya's access card after returning to the office"
        ],
        "clues": [
            {
                "seq": 1,
                "text": "The office security system confirms that Project Crimson was still present at 6:30 PM.\n\nAt 6:47 PM, someone accessed the computer containing the file.\n\nAt 7:03 PM, the file was copied to an external device.\n\nAt 7:15 PM, the original file was deleted.\n\nThis means the person responsible had access to the computer between 6:47 PM and 7:03 PM.",
                "question": "What boolean operator in Python returns True only if both operands are True?",
                "answer": "and"
            },
            {
                "seq": 2,
                "text": "The building's access-card records show that Maya's access card was used to enter the secure project room at 6:51 PM.\n\nMaya insists that she had already left the building.\n\nThe security camera near the entrance confirms that Maya left at 6:42 PM.\n\nSomeone else therefore appears to have used Maya's access card after she had left.",
                "question": "word = \"Python\"\nprint(len(word) * 2)",
                "answer": "12"
            },
            {
                "seq": 3,
                "text": "Computer logs show that the Project Crimson file was copied to a USB device at 7:03 PM.\n\nThe USB device was registered to a workstation that normally belonged to Ryan.\n\nRyan claims he never used that workstation that evening.\n\nHowever, the workstation had been accessed using Maya's credentials.",
                "question": "x = 10\nif x % 2 == 0:\n    print(x // 2)\nelse:\n    print(x)",
                "answer": "5"
            },
            {
                "seq": 4,
                "text": "Investigators recover CCTV footage from the corridor outside the project room.\n\nAt 6:50 PM, a person enters the room wearing a dark jacket and carrying a backpack.\n\nThe person's face is not visible.\n\nHowever, the CCTV timestamp shows the person leaving the room at 7:08 PM.\n\nRyan was seen entering the building shortly before 6:50 PM and leaving shortly after 7:08 PM.",
                "question": "list1 = [1, 2]\nlist2 = [3, 4]\nprint(list1 + list2)",
                "answer": "[1, 2, 3, 4]"
            },
            {
                "seq": 5,
                "text": "Investigators examine the access-card records again.\n\nMaya's card was used to enter the secure project room at 6:51 PM, even though Maya had already left the building.\n\nFurther investigation reveals that Ryan had temporarily borrowed Maya's access card earlier that evening, claiming he needed it to collect his belongings.\n\nCCTV shows Ryan entering the project room shortly after Maya left.\n\nThe copied file was found on a USB device connected to Ryan's workstation.",
                "question": "names = [\"Alice\", \"Bob\", \"Charlie\"]\nprint(names[-1])",
                "answer": "Charlie"
            }
        ]
    },
    {
        "title": "The 11:47 Message",
        "description": "At exactly 11:47 PM, four college students receive the same anonymous message:\n\n\u201cYou all know what happened at 10:15. One of you is lying. Check the old media room before midnight.\u201d\n\nEarlier that evening, a college event was taking place on campus. At 10:15 PM, the event's confidential results file disappeared from the organizers' computer.\n\nFour people were near the event area:\n\nAarav \u2014 the event's technical coordinator. He had access to the computer and says he was fixing a projector.\nMeera \u2014 one of the event organizers. She claims she was backstage arranging certificates.\nKabir \u2014 a student volunteer. He says he left the venue at 10:05 PM.\nRiya \u2014 the photographer for the event. She says she was outside taking photographs.\n\nAt first, everyone denies knowing anything about the missing file.\n\nThen the evidence starts appearing.\n\nA security log shows someone used the organizers' computer at 10:15 PM. A photograph taken around the same time places one of the suspects somewhere they claimed they were not. A deleted message reveals that someone was warned about the missing file before anyone officially knew it was gone.\n\nFinally, investigators discover that the mysterious 11:47 PM message was not sent from outside the campus.\n\nSomeone inside the group sent it.\n\nThe team must examine the five clues and determine:\n\nWho sent the 11:47 message, and who was responsible for making the confidential results file disappear?",
        "final_solution": "C",
        "final_options": [
            "Aarav sent the message and secretly deleted the results file while working on the event computer",
            "Meera sent the message after discovering that Kabir had taken the results file.",
            "Kabir stole the results file and sent the 11:47 message to make the others suspicious of each other."
        ],
        "clues": [
            {
                "seq": 1,
                "text": "The organizers' computer was accessed at 10:15 PM.\n\nThe login was made using the event volunteer account.\n\nThe account belonged to Kabir.\n\nKabir had previously claimed that he left the venue at 10:05 PM",
                "question": "Which Python built-in function converts a string to an integer?",
                "answer": "int"
            },
            {
                "seq": 2,
                "text": "A photograph taken by Riya at 10:12 PM shows the hallway outside the media room.\n\nIn the reflection of a glass door, a person wearing a blue volunteer jacket can be seen entering the room.\n\nKabir was the only suspect wearing the blue volunteer jacket that night.",
                "question": "val = 4\nval **= 2\nprint(val)",
                "answer": "16"
            },
            {
                "seq": 3,
                "text": "Investigators recover a deleted message from Kabir's phone sent at 10:18 PM:\n\n\u201cIt's gone. Nobody should know about the file yet.\u201d\n\nThe message was sent to an unknown number.\n\nThe message was sent three minutes after the results file was accessed.",
                "question": "for i in range(5):\n    if i == 3:\n        break\nprint(i)",
                "answer": "3"
            },
            {
                "seq": 4,
                "text": "The anonymous message was sent at exactly 11:47 PM.\n\nNetwork records show that the message was sent using a device connected to the college Wi-Fi.\n\nThe device was identified as Kabir's phone.\n\nKabir initially claims that he was no longer on campus after 10:05 PM.",
                "question": "def add(a, b=2):\n    return a + b\nprint(add(5))",
                "answer": "7"
            },
            {
                "seq": 5,
                "text": "Security cameras are checked again.\n\nKabir did not leave campus at 10:05 PM.\n\nInstead, he entered the old media room at 10:10 PM and remained there until shortly after 10:20 PM.\n\nThe missing results file was last accessed from the computer inside that room.\n\nAt 11:47 PM, Kabir\u2019s phone connected to the same college Wi-Fi and sent the anonymous message.",
                "question": "matrix = [[1, 2], [3, 4]]\nprint(matrix[1][0])",
                "answer": "3"
            }
        ]
    },
    {
        "title": "The Anonymous File",
        "description": "Late one evening, the college's internal system receives an anonymous file named final_report.pdf.\n\nThe file contains confidential information about an upcoming college event and was never supposed to be shared.\n\nThe IT team immediately tries to find out who uploaded it.\n\nFour students had access to the computer lab that evening:\n\nDev \u2014 the technical team member. He says he was testing software in Lab 2.\nNisha \u2014 an event coordinator. She says she left campus at 7:30 PM.\nArjun \u2014 a student volunteer. He says he stayed in the library until 9:00 PM.\nTara \u2014 a media team member. She says she was editing photographs in the media room.\n\nAt first, there is no name attached to the uploaded file.\n\nThen investigators discover that the file was uploaded at 8:42 PM.\n\nA strange login was recorded shortly before the upload. A deleted email mentions the file, and a security camera places one of the students somewhere unexpected.\n\nThe investigation becomes more confusing when the original file is discovered on another computer.\n\nThe team must examine the five clues and determine:\n\nWho anonymously uploaded the file, and how did they get access to it?",
        "final_solution": "B",
        "final_options": [
            "Dev uploaded the file using the technical team's computer.",
            "Arjun uploaded the file after secretly copying it from the event coordinator's computer.",
            "Tara uploaded the file after finding it in the media room."
        ],
        "clues": [
            {
                "seq": 1,
                "text": "The college system records that the confidential file final_report.pdf was uploaded at exactly 8:42 PM.\nThe upload came from Computer 12 in the computer lab.\nThe file was uploaded using an anonymous account, so no student's name appeared in the upload record.",
                "question": "Which data structure in Python uses curly braces {} and stores key-value pairs?",
                "answer": "dict"
            },
            {
                "seq": 2,
                "text": "Computer 12 was accessed at 8:36 PM.\nThe login was made using Arjun's student account.\nHowever, Arjun had claimed that he was in the library until 9:00 PM and never entered the computer lab.",
                "question": "a = \"10\"\nb = \"20\"\nprint(a + b)",
                "answer": "1020"
            },
            {
                "seq": 3,
                "text": "Investigators recover a deleted email from Arjun's account, sent at 8:39 PM.\n\n\u201cI found the report. I'll send it before anyone notices.\u201d\n\nThe recipient's email address is missing, so investigators cannot immediately determine who Arjun was communicating with.",
                "question": "def check(n):\n    return n % 3 == 0\nprint(check(9))",
                "answer": "True"
            },
            {
                "seq": 4,
                "text": "Security footage shows a person entering the computer lab at 8:34 PM.\n\nThe person's face is partially hidden, but they are wearing a blue college jacket.\n\nThe person stays in the lab until 8:47 PM, leaving shortly after the anonymous file was uploaded.\n\nArjun was wearing a blue college jacket that evening.",
                "question": "words = [\"apple\", \"banana\"]\nwords.insert(1, \"cherry\")\nprint(words)",
                "answer": "['apple', 'cherry', 'banana']"
            },
            {
                "seq": 5,
                "text": "Investigators find another copy of final_report.pdf on a computer in the library.\n\nThe file was created at 8:20 PM and was accessed using Arjun's student account.\n\nFile history shows that the report was copied to a USB device at 8:31 PM.\n\nThe same USB device was connected to Computer 12 at 8:38 PM, just four minutes after the computer was accessed using Arjun's account.",
                "question": "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
                "answer": "[1, 2, 3, 4]"
            }
        ]
    }
];

    for (const m of mysteries) {
      const result = await db.run(
        'INSERT INTO mysteries (title, description, final_solution, final_options) VALUES (?, ?, ?, ?)',
        m.title, m.description, m.final_solution, JSON.stringify(m.final_options)
      );
      const mysteryId = result.lastID;
      
      for (const c of m.clues) {
        await db.run(
          'INSERT INTO clues (mystery_id, sequence_number, clue_text, question, answer) VALUES (?, ?, ?, ?, ?)',
          mysteryId, c.seq, c.text, c.question, c.answer
        );
      }
    }
    console.log("Database seeded successfully.");
  }

  return db;
}

module.exports = { setupDatabase };
