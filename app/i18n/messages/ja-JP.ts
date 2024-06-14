import { LOCALES } from "../constants";

const dialogue = {
  interestsDialogue1:
    "「ジンベイザメ」という水族です。地球の海でしか見つかれません。",
  interestsDialogue2:
    "ターゲットを見つけるために、スノーケルが必要かもしれません。",
  interestsDialogue3: "ターゲットの習慣についての情報を送ります。",
  blogDialogue1: "他の情報がありますかね。",
  blogDialogue2: "ハッキングしてみましょうか。",
  blogDialogue3: "...",
  blogDialogue4: "ちょっと待って、これは…！！",
  blogDialogue5: "彼の日記を見つけました。",
  blogDialogue6: "偉いでしょう？",
  contactDialogue1: "可愛いです",
  contactDialogue2: "そんなに簡単に見つけられるといいのですが。",
  contactDialogue3: "ちょっと待って！通信を受信しています…",
  contactDialogue4: "ターゲットです！！",
  jakeDialogue1: "おお！それを見ました？",
  jakeDialogue2: "星の形は少しターゲットのように見えませんか？",
  jakeDialogue3: "ターゲットが近いわけでしょう！",
  jakeDialogue4: "この辺をスキャンしてみます。",
  jakeDialogue5: "...",
  jakeDialogue6: "何かを見つけました！ターゲットの情報みたいです。",
  jakeDialogue7: "今送ります。",
  projectsDialogue1: "すぐターゲットを見つけるといいんですね。",
  projectsDialogue2: "「綺麗なユーザーインターフェースを作ってくれる」って…",
  projectsDialogue3: "彼が作ったものを見ましょうか。",
  projectsDialogue4: "あら、いいんですね。",
  projectsDialogue5: "はい、どうぞ。",
};

const jakeData = {
  jakeDataNameKey: "Name: ",
  jakeDataNameValue: "Jake Pitman",
  jakeDataAgeKey: "Age: ",
  jakeDataAgeValue: "Unknown",
  jakeDataLastSightedKey: "Last sighted:",
  jakeDataLastSightedValue: "Japan, Earth",
  jakeDataRolesPerformedKey: "Roles performed:",
  jakeDataRolesPerformedTeacher: "Teacher",
  jakeDataRolesPerformedToolingEngineer: "Tooling Engineer",
  jakeDataRolesPerformedFullStackEngineer: "Full Stack Engineer",
  jakeDataRolesPerformedFrontEndEngineer: "Front End Engineer",
  jakeDataRolesPerformedDesignSystemsEngineer: "Design Systems Engineer",
  techStackReact: "React",
  techStackNextJS: "NextJS",
  techStackNodeJS: "NodeJS",
  techStackTypescript: "Typescript",
  techStackBash: "Bash",
  techStackStorybook: "Storybook",
  techStackThreeJS: "ThreeJS",
  techStackR3F: "R3f",
  techStackFramerMotion: "Framer Motion",
  techStackBlender: "Blender",
};

const interestsData = {
  interestsDataMainBody:
    "Target's primary motivation is software engineering. However, he keeps himself healthy by engaging in a range of other pursuits in his down-time:",
  interestsDataExploringTitle: "Exploring",
  interestsDataExploringText: "Target has a curious mind and itchy feet",
  interestsDataDivingTitle: "Diving",
  interestsDataDivingText:
    "Sighted in the oceans of Australia, New Zealand, and Thailand",
  interestsDataDronesTitle: "Drones",
  interestsDataDronesText: "He builds, repairs, races, and films with them",
  interestsDataGuitarTitle: "Guitar",
  interestsDataGuitarText: "The Earthlings call it 'Rock and Roll Baby'",
};

const contactData = {
  contactDataImJake: "Hi there! I'm Jake.",
  contactDataMainBody:
    "I heard you were looking for a front-end engineer, and I'd be happy to help. Please use the form below, and let's work together.",
  contactDataYourEmail: "Your email:",
  contactDataYourMessage: "Your message:",
  contactDataSend: "Send",
};

const dashboard = {
  dashboardHome: "Home",
  dashboardJake: "Jake",
  dashboardInterests: "Interests",
  dashboardProjects: "Projects",
  dashboardBlog: "Blog",
  dashboardContact: "Contact",
};

const IncomingData = {
  incomingDataJakePitman: "Jake Pitman",
  incomingDataJeromeVI: "Jerome VI",
};

const messages = {
  [LOCALES.JAPANESE]: {
    ...dialogue,
    ...jakeData,
    ...interestsData,
    ...contactData,
    ...dashboard,
    ...IncomingData,
  },
};
export default messages;
