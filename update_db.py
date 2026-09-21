import json

mysteries = [
    {
        "title": "Missing Angel",
        "description": "Three undercover agents known as **The Angels**—Aria, Blair, and Casey—are sent on a secret mission by their mysterious handler, **Charlie**.\n\nTheir mission is simple: **retrieve the Crimson Drive before midnight.**\n\nThe drive contains sensitive information about a major operation and is hidden somewhere inside a luxury hotel. Each Angel has a specific role: Aria is the team's tech expert, Blair specializes in disguises, and Casey is responsible for security and combat.\n\nAt **11:20 PM**, Charlie sends the Angels one final message:\n\n> **\"One of you has betrayed the team. The drive is gone. Find out who before midnight.\"**\n\nThe problem is that all three Angels claim they were following Charlie's instructions—and all three have something to hide.\n\nAs the Angels investigate, strange evidence begins to surface. An Angel access code was used to enter a restricted floor. A disguised person was caught on camera. A mysterious photograph was sent to Charlie, and the Crimson Drive was opened using information hidden inside Aria's encrypted files.\n\nThen they discover something even more disturbing: a recording mentioning a **second secret mission** that Charlie claims never existed.\n\nWith time running out, the Angels must piece together the five clues, uncover who betrayed the team, determine how the Crimson Drive was taken, and reveal the truth behind the mysterious second mission.",
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
                "question": "Which keyword is used to handle exceptions in Python?",
                "answer": "except"
            },
            {
                "seq": 2,
                "text": "At 10:43 PM, the elevator camera shows a person wearing a hotel employee uniform entering the 12th floor. Their face is hidden, but they are wearing a silver bracelet, similar to the one Blair always wears.",
                "question": "numbers = [4, 7, 2, 9, 6, 3]\n\nresult = []\ntotal = 0\n\nfor i in range(len(numbers)):\n    value = numbers[i]\n\n    if value % 2 == 0:\n        value = value + i\n    else:\n        value = value - i\n\n    if value > 5:\n        result.append(value)\n        total = total + value\n    else:\n        result.append(value * 2)\n        total = total + value * 2\n\nprint(numbers)\nprint(result)\nprint(total)\nprint(result[1])\nprint(result[-1])\n\ncount = 0\n\nfor value in result:\n    if value % 2 == 0:\n        count = count + 1\n\nprint(count)",
                "answer": "[4, 7, 2, 9, 6, 3]\n[4, 12, 4, 12, 10, 4]\n46\n12\n4\n6"
            },
            {
                "seq": 3,
                "text": "At 10:51 PM, Charlie receives a message from an unknown number:\n\"The drive isn't where you think it is.\"\nThe message contains a photograph of Casey standing near the back entrance. Casey claims the photograph was taken earlier that evening.",
                "question": "text = \"PYTHONPROGRAMMING\"\n\nfirst = text[:6]\nsecond = text[6:12]\nthird = text[12:]\n\na = first.lower()\nb = second.upper()\nc = third[::-1]\n\nresult = a + \"-\" + b + \"-\" + c\n\nprint(text)\nprint(first)\nprint(second)\nprint(third)\nprint(a)\nprint(b)\nprint(c)\nprint(result)\nprint(len(result))\n\ncount = 0\n\nfor ch in result:\n    if ch == \"m\" or ch == \"M\":\n        count = count + 1\n\nprint(count)",
                "answer": "PYTHONPROGRAMMING\nPYTHON\nPROGRAM\nMING\npython\nPROGRAM\nGNIM\npython-PROGRAM-GNIM\n17\n2"
            },
            {
                "seq": 4,
                "text": "The Crimson Drive is discovered inside a locked maintenance room. The lock was opened using a six-digit code that was found hidden inside Aria's encrypted files, suggesting someone had access to her computer.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        int[] numbers = {4, 7, 2, 9, 6, 3};\n        int[] result = new int[numbers.length];\n\n        int total = 0;\n\n        for (int i = 0; i < numbers.length; i++) {\n\n            int value = numbers[i];\n\n            if (value % 2 == 0) {\n                value = value + i;\n            } else {\n                value = value - i;\n            }\n\n            if (value > 5) {\n                result[i] = value;\n            } else {\n                result[i] = value * 2;\n            }\n\n            total = total + result[i];\n        }\n\n        System.out.println(java.util.Arrays.toString(numbers));\n        System.out.println(java.util.Arrays.toString(result));\n        System.out.println(total);\n        System.out.println(result[1]);\n        System.out.println(result[result.length - 1]);\n\n        int count = 0;\n\n        for (int value : result) {\n            if (value % 2 == 0) {\n                count++;\n            }\n        }\n\n        System.out.println(count);\n    }\n}",
                "answer": "[4, 7, 2, 9, 6, 3]\n[4, 12, 4, 12, 10, 4]\n46\n12\n4\n6"
            },
            {
                "seq": 5,
                "text": "A hotel audio recording from 10:38 PM captures someone saying:\n\"Charlie doesn't know about the second mission.\"\nAccording to Charlie, there was never supposed to be a second mission. The voice sounds like one of the Angels.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        String word = \"PROGRAMMING\";\n        String result = \"\";\n\n        for (int i = 0; i < word.length(); i++) {\n\n            char ch = word.charAt(i);\n\n            if (i % 2 == 0) {\n                result = result + Character.toLowerCase(ch);\n            } else {\n                result = result + Character.toUpperCase(ch);\n            }\n        }\n\n        System.out.println(word);\n        System.out.println(result);\n        System.out.println(word.substring(0, 4));\n        System.out.println(word.substring(4, 8));\n        System.out.println(word.substring(8));\n\n        int vowels = 0;\n\n        for (int i = 0; i < word.length(); i++) {\n            char ch = Character.toLowerCase(word.charAt(i));\n\n            if (ch == 'a' || ch == 'e' || ch == 'i' ||\n                ch == 'o' || ch == 'u') {\n                vowels++;\n            }\n        }\n\n        System.out.println(vowels);\n        System.out.println(result.length());\n    }\n}",
                "answer": "PROGRAMMING\npRoGrAmMiNg\nPROG\nRAMM\nING\n3\n11"
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
                "question": "Which function returns the number of items in an object?",
                "answer": "len"
            },
            {
                "seq": 2,
                "text": "A recovered message from Adrian's phone says:\n\n\u201cI know you took the file. Meet me at 9:15. Come alone.\u201d\nThe recipient's name had been deleted from Adrian's phone.",
                "question": "numbers = []\ntotal = 0\n\nfor i in range(1, 5):\n    for j in range(1, 5):\n        value = i + j\n\n        if value % 2 == 0:\n            value = value * 2\n        else:\n            value = value + 3\n\n        numbers.append(value)\n        total = total + value\n\nprint(numbers)\nprint(total)\nprint(len(numbers))\n\nprint(numbers[0])\nprint(numbers[5])\nprint(numbers[-1])\n\neven_count = 0\n\nfor value in numbers:\n    if value % 2 == 0:\n        even_count = even_count + 1\n\nprint(even_count)",
                "answer": "[4, 4, 8, 6, 4, 8, 6, 12, 8, 6, 12, 8, 6, 12, 8, 16]\n120\n16\n4\n8\n16\n16"
            },
            {
                "seq": 3,
                "text": "Adrian's missing laptop is accessed remotely at 9:23 PM. The login uses Ethan's credentials, and the confidential project folder is opened. Ethan claims he never accessed the laptop.",
                "question": "items = [10, 20, 30, 40, 50]\n\nitems.append(60)\nitems.insert(1, 15)\n\nx = items.pop(3)\n\nitems[0] = items[0] + 5\nitems[-1] = items[-1] - 10\n\nitems.remove(30)\n\nprint(items)\nprint(x)\nprint(len(items))\n\na = items[:3]\nb = items[2:]\n\na.append(100)\nb.insert(0, 200)\n\nprint(a)\nprint(b)\nprint(items)\n\ntotal = 0\n\nfor value in items:\n    total = total + value\n\nprint(total)",
                "answer": "[15, 20, 50, 50]\n40\n4\n[15, 20, 50, 100]\n[200, 50]\n[15, 20, 50, 50]\n135"
            },
            {
                "seq": 4,
                "text": "A photograph recovered from Adrian's phone was taken at 9:26 PM inside his office. The reflection in a glass cabinet shows another person standing behind Adrian, proving he wasn't alone.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        int total = 0;\n        int count = 0;\n\n        for (int i = 1; i <= 4; i++) {\n\n            for (int j = 1; j <= 4; j++) {\n\n                int value = i + j;\n\n                if (value % 2 == 0) {\n                    value = value * 2;\n                } else {\n                    value = value + 3;\n                }\n\n                System.out.print(value + \" \");\n\n                total = total + value;\n                count++;\n            }\n\n            System.out.println();\n        }\n\n        System.out.println(\"Total = \" + total);\n        System.out.println(\"Count = \" + count);\n    }\n}",
                "answer": "4 5 8 7 \n5 8 7 12 \n8 7 12 9 \n7 12 9 16 \nTotal = 120\nCount = 16"
            },
            {
                "seq": 5,
                "text": "A damaged recording captures Adrian saying:\n\n\u201cYou shouldn't have taken it.\u201d\n\nThe other person responds:\n\n\u201cYou were never supposed to find out.\u201d\n\nThe voice is later matched to Ethan.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        int[] numbers = {10, 20, 30, 40, 50};\n\n        numbers[0] = numbers[0] + 5;\n        numbers[2] = numbers[2] * 2;\n\n        int temp = numbers[1];\n        numbers[1] = numbers[3];\n        numbers[3] = temp;\n\n        for (int i = 0; i < numbers.length; i++) {\n\n            if (numbers[i] > 50) {\n                numbers[i] = numbers[i] - 10;\n            } else {\n                numbers[i] = numbers[i] + 2;\n            }\n        }\n\n        System.out.println(java.util.Arrays.toString(numbers));\n\n        int sum = 0;\n\n        for (int i = 0; i < numbers.length; i++) {\n            sum += numbers[i];\n        }\n\n        System.out.println(sum);\n        System.out.println(numbers[0] + numbers[4]);\n        System.out.println(numbers[2] - numbers[1]);\n\n        int count = 0;\n\n        for (int n : numbers) {\n            if (n > 30) {\n                count++;\n            }\n        }\n\n        System.out.println(count);\n    }\n}",
                "answer": "[17, 42, 52, 32, 52]\n195\n69\n10\n4"
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
                "question": "Which method adds an element to the end of a list?",
                "answer": "append"
            },
            {
                "seq": 2,
                "text": "The building's access-card records show that Maya's access card was used to enter the secure project room at 6:51 PM.\n\nMaya insists that she had already left the building.\n\nThe security camera near the entrance confirms that Maya left at 6:42 PM.\n\nSomeone else therefore appears to have used Maya's access card after she had left.",
                "question": "def calculate(value):\n    if value % 2 == 0:\n        value = value // 2\n    else:\n        value = value * 2\n\n    if value > 10:\n        value = value - 3\n    else:\n        value = value + 4\n\n    return value\n\n\nnumbers = [3, 8, 5, 12, 7]\nresult = []\n\nfor number in numbers:\n    answer = calculate(number)\n    result.append(answer)\n\nprint(numbers)\nprint(result)\n\ntotal = 0\n\nfor value in result:\n    total = total + value\n\nprint(total)\n\na = calculate(result[0])\nb = calculate(result[-1])\n\nprint(a)\nprint(b)\nprint(a + b)",
                "answer": "[3, 8, 5, 12, 7]\n[10, 1, 7, 3, 11]\n32\n17\n19\n36"
            },
            {
                "seq": 3,
                "text": "Computer logs show that the Project Crimson file was copied to a USB device at 7:03 PM.\n\nThe USB device was registered to a workstation that normally belonged to Ryan.\n\nRyan claims he never used that workstation that evening.\n\nHowever, the workstation had been accessed using Maya's credentials.",
                "question": "marks = {\n    \"Math\": 78,\n    \"Science\": 65,\n    \"English\": 82,\n    \"History\": 49,\n    \"Computer\": 91\n}\n\npassed = []\nfailed = []\ntotal = 0\n\nfor subject in marks:\n    mark = marks[subject]\n    total = total + mark\n\n    if mark >= 50:\n        passed.append(subject)\n    else:\n        failed.append(subject)\n\nprint(marks)\nprint(passed)\nprint(failed)\nprint(total)\nprint(len(passed))\nprint(len(failed))\n\nmarks[\"History\"] = 55\nmarks[\"Math\"] = marks[\"Math\"] + 5\n\nprint(marks)\n\nnew_total = 0\n\nfor mark in marks.values():\n    new_total = new_total + mark\n\nprint(new_total)\nprint(marks[\"Math\"] + marks[\"Computer\"])",
                "answer": "{'Math': 78, 'Science': 65, 'English': 82, 'History': 49, 'Computer': 91}\n['Math', 'Science', 'English', 'Computer']\n['History']\n365\n4\n1\n{'Math': 83, 'Science': 65, 'English': 82, 'History': 55, 'Computer': 91}\n376\n174"
            },
            {
                "seq": 4,
                "text": "Investigators recover CCTV footage from the corridor outside the project room.\n\nAt 6:50 PM, a person enters the room wearing a dark jacket and carrying a backpack.\n\nThe person's face is not visible.\n\nHowever, the CCTV timestamp shows the person leaving the room at 7:08 PM.\n\nRyan was seen entering the building shortly before 6:50 PM and leaving shortly after 7:08 PM.",
                "question": "public class Main {\n\n    static int calculate(int value) {\n\n        if (value % 2 == 0) {\n            value = value / 2;\n        } else {\n            value = value * 2;\n        }\n\n        if (value > 10) {\n            value = value - 3;\n        } else {\n            value = value + 4;\n        }\n\n        return value;\n    }\n\n    public static void main(String[] args) {\n\n        int[] numbers = {3, 8, 5, 12, 7};\n        int[] result = new int[numbers.length];\n\n        for (int i = 0; i < numbers.length; i++) {\n            result[i] = calculate(numbers[i]);\n        }\n\n        System.out.println(java.util.Arrays.toString(numbers));\n        System.out.println(java.util.Arrays.toString(result));\n\n        int total = 0;\n\n        for (int value : result) {\n            total += value;\n        }\n\n        System.out.println(total);\n\n        int a = calculate(result[0]);\n        int b = calculate(result[result.length - 1]);\n\n        System.out.println(a);\n        System.out.println(b);\n        System.out.println(a + b);\n    }\n}",
                "answer": "[3, 8, 5, 12, 7]\n[10, 1, 7, 3, 11]\n32\n17\n19\n36"
            },
            {
                "seq": 5,
                "text": "Investigators examine the access-card records again.\n\nMaya's card was used to enter the secure project room at 6:51 PM, even though Maya had already left the building.\n\nFurther investigation reveals that Ryan had temporarily borrowed Maya's access card earlier that evening, claiming he needed it to collect his belongings.\n\nCCTV shows Ryan entering the project room shortly after Maya left.\n\nThe copied file was found on a USB device connected to Ryan's workstation.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        int number = 2;\n        int total = 0;\n        int count = 0;\n\n        while (number <= 20) {\n\n            if (number % 3 == 0) {\n                total = total + number;\n            } else {\n                total = total + 1;\n            }\n\n            count++;\n\n            if (number % 2 == 0) {\n                number = number + 3;\n            } else {\n                number = number + 2;\n            }\n        }\n\n        System.out.println(number);\n        System.out.println(total);\n        System.out.println(count);\n\n        int x = number - total;\n\n        if (x < 0) {\n            x = x * -1;\n        }\n\n        System.out.println(x);\n    }\n}",
                "answer": "23\n49\n7\n26"
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
                "question": "Which function converts a string into an integer?",
                "answer": "int"
            },
            {
                "seq": 2,
                "text": "A photograph taken by Riya at 10:12 PM shows the hallway outside the media room.\n\nIn the reflection of a glass door, a person wearing a blue volunteer jacket can be seen entering the room.\n\nKabir was the only suspect wearing the blue volunteer jacket that night.",
                "question": "numbers = []\ntotal = 0\n\nfor i in range(1, 11):\n\n    if i == 4:\n        continue\n\n    if i % 2 == 0:\n        value = i * 2\n    else:\n        value = i + 3\n\n    numbers.append(value)\n\nprint(numbers)\n\nfor value in numbers:\n    if value > 10:\n        total = total + value\n    else:\n        total = total + 1\n\nprint(total)\n\ncount = 0\n\nfor value in numbers:\n    if value % 2 == 0:\n        count = count + 1\n\nprint(count)\n\nnumbers[2] = numbers[2] + 10\nnumbers[-1] = numbers[-1] // 2\n\nprint(numbers)\n\ntotal = 0\n\nfor i in range(len(numbers)):\n    total = total + numbers[i] - i\n\nprint(total)",
                "answer": "[4, 4, 6, 8, 8, 12, 10, 16, 12]\n81\n9\n[4, 4, 16, 8, 8, 12, 10, 16, 6]\n67"
            },
            {
                "seq": 3,
                "text": "Investigators recover a deleted message from Kabir's phone sent at 10:18 PM:\n\n\u201cIt's gone. Nobody should know about the file yet.\u201d\n\nThe message was sent to an unknown number.\n\nThe message was sent three minutes after the results file was accessed.",
                "question": "word = \"education\"\n\nresult = \"\"\n\nfor i in range(len(word)):\n    ch = word[i]\n\n    if i % 2 == 0:\n        result = result + ch.upper()\n    else:\n        result = result + ch\n\nprint(word)\nprint(result)\n\nvowels = 0\nconsonants = 0\n\nfor ch in word:\n    if ch in \"aeiou\":\n        vowels = vowels + 1\n    else:\n        consonants = consonants + 1\n\nprint(vowels)\nprint(consonants)\n\npart1 = word[:4]\npart2 = word[4:]\n\nprint(part1)\nprint(part2)\nprint(part1 + \"-\" + part2)\n\nreversed_word = word[::-1]\n\nprint(reversed_word)\nprint(reversed_word[2:7])",
                "answer": "education\nEdUcAtIoN\n5\n4\neduc\nation\neduc-ation\nnoitacude\nitacu"
            },
            {
                "seq": 4,
                "text": "The anonymous message was sent at exactly 11:47 PM.\n\nNetwork records show that the message was sent using a device connected to the college Wi-Fi.\n\nThe device was identified as Kabir's phone.\n\nKabir initially claims that he was no longer on campus after 10:05 PM.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        int[][] data = {\n            {2, 4, 6},\n            {1, 3, 5},\n            {10, 20, 30}\n        };\n\n        int total = 0;\n\n        for (int i = 0; i < data.length; i++) {\n\n            for (int j = 0; j < data[i].length; j++) {\n\n                int value = data[i][j];\n\n                if (value % 2 == 0) {\n                    value = value + 1;\n                } else {\n                    value = value * 2;\n                }\n\n                data[i][j] = value;\n                total += value;\n            }\n        }\n\n        for (int i = 0; i < data.length; i++) {\n            System.out.println(java.util.Arrays.toString(data[i]));\n        }\n\n        System.out.println(total);\n\n        System.out.println(data[0][1]);\n        System.out.println(data[1][2]);\n        System.out.println(data[2][0]);\n\n        int count = 0;\n\n        for (int[] row : data) {\n            for (int value : row) {\n                if (value > 10) {\n                    count++;\n                }\n            }\n        }\n\n        System.out.println(count);\n    }\n}",
                "answer": "[3, 5, 7]\n[2, 6, 10]\n[11, 21, 31]\n96\n5\n10\n11\n3"
            },
            {
                "seq": 5,
                "text": "Security cameras are checked again.\n\nKabir did not leave campus at 10:05 PM.\n\nInstead, he entered the old media room at 10:10 PM and remained there until shortly after 10:20 PM.\n\nThe missing results file was last accessed from the computer inside that room.\n\nAt 11:47 PM, Kabir\u2019s phone connected to the same college Wi-Fi and sent the anonymous message.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        int total = 0;\n        int count = 0;\n\n        for (int i = 1; i <= 12; i++) {\n\n            if (i == 4 || i == 9) {\n                continue;\n            }\n\n            if (i > 10) {\n                break;\n            }\n\n            if (i % 2 == 0) {\n                total = total + i * 2;\n            } else {\n                total = total + i;\n            }\n\n            count++;\n        }\n\n        System.out.println(total);\n        System.out.println(count);\n\n        int result = total / count;\n\n        System.out.println(result);\n\n        if (result % 2 == 0) {\n            System.out.println(\"EVEN\");\n        } else {\n            System.out.println(\"ODD\");\n        }\n    }\n}",
                "answer": "57\n8\n7\nODD"
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
                "question": "What built-in Python data structure is ordered, mutable, and enclosed in square brackets?",
                "answer": "List"
            },
            {
                "seq": 2,
                "text": "Computer 12 was accessed at 8:36 PM.\nThe login was made using Arjun's student account.\nHowever, Arjun had claimed that he was in the library until 9:00 PM and never entered the computer lab.",
                "question": "data = [\n    [2, 4, 6],\n    [1, 3, 5],\n    [10, 20, 30]\n]\n\nresult = []\ntotal = 0\n\nfor row in data:\n    row_result = []\n\n    for value in row:\n        if value % 2 == 0:\n            new_value = value + 1\n        else:\n            new_value = value * 2\n\n        row_result.append(new_value)\n        total = total + new_value\n\n    result.append(row_result)\n\nprint(data)\nprint(result)\nprint(total)\n\nprint(result[0])\nprint(result[1])\nprint(result[2])\n\nprint(result[0][1])\nprint(result[1][2])\nprint(result[2][0])\n\ncount = 0\n\nfor row in result:\n    for value in row:\n        if value > 10:\n            count = count + 1\n\nprint(count)",
                "answer": "[[2, 4, 6], [1, 3, 5], [10, 20, 30]]\n[[3, 5, 7], [2, 6, 10], [11, 21, 31]]\n96\n[3, 5, 7]\n[2, 6, 10]\n[11, 21, 31]\n5\n10\n11\n3"
            },
            {
                "seq": 3,
                "text": "Investigators recover a deleted email from Arjun's account, sent at 8:39 PM.\n\n\u201cI found the report. I'll send it before anyone notices.\u201d\n\nThe recipient's email address is missing, so investigators cannot immediately determine who Arjun was communicating with.",
                "question": "numbers = [5, 8, 3, 12, 7, 10]\n\nresult = []\ntotal = 0\n\nfor i in range(len(numbers)):\n\n    value = numbers[i]\n\n    if value % 2 == 0:\n        value = value // 2\n    else:\n        value = value * 2\n\n    if i % 2 == 0:\n        value = value + i\n    else:\n        value = value - i\n\n    if value > 10:\n        value = value - 5\n    else:\n        value = value + 5\n\n    result.append(value)\n    total = total + value\n\nprint(numbers)\nprint(result)\nprint(total)\n\nlargest = result[0]\n\nfor value in result:\n    if value > largest:\n        largest = value\n\nprint(largest)\n\nsmallest = result[0]\n\nfor value in result:\n    if value < smallest:\n        smallest = value\n\nprint(smallest)\n\nprint(largest - smallest)\n\nresult[1] = result[1] + 10\nresult[-1] = result[-1] - 2\n\nprint(result)\n\nfinal_total = 0\n\nfor value in result:\n    final_total = final_total + value\n\nprint(final_total)",
                "answer": "[5, 8, 3, 12, 7, 10]\n[10, 6, 8, 3, 15, 4]\n46\n15\n3\n12\n[10, 16, 8, 3, 15, 2]\n54"
            },
            {
                "seq": 4,
                "text": "Security footage shows a person entering the computer lab at 8:34 PM.\n\nThe person's face is partially hidden, but they are wearing a blue college jacket.\n\nThe person stays in the lab until 8:47 PM, leaving shortly after the anonymous file was uploaded.\n\nArjun was wearing a blue college jacket that evening.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        String[] names = {\n            \"Alice\",\n            \"Bob\",\n            \"Charlie\",\n            \"David\",\n            \"Eva\"\n        };\n\n        int totalLength = 0;\n        String result = \"\";\n\n        for (int i = 0; i < names.length; i++) {\n\n            String name = names[i];\n\n            totalLength += name.length();\n\n            if (name.length() % 2 == 0) {\n                result = result + name.toUpperCase() + \" \";\n            } else {\n                result = result + name.toLowerCase() + \" \";\n            }\n        }\n\n        System.out.println(result);\n        System.out.println(totalLength);\n\n        for (int i = names.length - 1; i >= 0; i--) {\n            System.out.print(names[i].charAt(0));\n\n            if (i > 0) {\n                System.out.print(\"-\");\n            }\n        }\n\n        System.out.println();\n\n        int count = 0;\n\n        for (String name : names) {\n            if (name.length() > 4) {\n                count++;\n            }\n        }\n\n        System.out.println(count);\n    }\n}\n",
                "answer": "alice BOB charlie david eva \n24\nE-D-C-B-A\n2"
            },
            {
                "seq": 5,
                "text": "Investigators find another copy of final_report.pdf on a computer in the library.\n\nThe file was created at 8:20 PM and was accessed using Arjun's student account.\n\nFile history shows that the report was copied to a USB device at 8:31 PM.\n\nThe same USB device was connected to Computer 12 at 8:38 PM, just four minutes after the computer was accessed using Arjun's account.",
                "question": "public class Main {\n    public static void main(String[] args) {\n\n        int[] numbers = {5, 8, 3, 12, 7, 10};\n        int[] result = new int[numbers.length];\n\n        int total = 0;\n\n        for (int i = 0; i < numbers.length; i++) {\n\n            int value = numbers[i];\n\n            if (value % 2 == 0) {\n                value = value / 2;\n            } else {\n                value = value * 2;\n            }\n\n            if (i % 2 == 0) {\n                value = value + i;\n            } else {\n                value = value - i;\n            }\n\n            if (value > 10) {\n                value = value - 5;\n            } else {\n                value = value + 5;\n            }\n\n            result[i] = value;\n            total += value;\n        }\n\n        System.out.println(java.util.Arrays.toString(numbers));\n        System.out.println(java.util.Arrays.toString(result));\n        System.out.println(total);\n\n        int largest = result[0];\n        int smallest = result[0];\n\n        for (int value : result) {\n\n            if (value > largest) {\n                largest = value;\n            }\n\n            if (value < smallest) {\n                smallest = value;\n            }\n        }\n\n        System.out.println(largest);\n        System.out.println(smallest);\n        System.out.println(largest - smallest);\n\n        result[1] = result[1] + 10;\n        result[4] = result[4] - 3;\n\n        System.out.println(java.util.Arrays.toString(result));\n\n        int finalTotal = 0;\n\n        for (int value : result) {\n            finalTotal += value;\n        }\n\n        System.out.println(finalTotal);\n    }\n}",
                "answer": "[5, 8, 3, 12, 7, 10]\n[10, 6, 8, 3, 15, 4]\n46\n15\n3\n12\n[10, 16, 8, 3, 12, 4]\n53"
            }
        ]
    }
]

js_code = """const sqlite3 = require('sqlite3').verbose();
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
    const mysteries = REPLACE_MYSTERIES;

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
"""

js_code = js_code.replace('REPLACE_MYSTERIES', json.dumps(mysteries, indent=4))

with open('c:/Users/user/Downloads/RASHMI/backend/database.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
