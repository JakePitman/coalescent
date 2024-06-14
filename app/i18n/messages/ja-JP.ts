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
  jakeDataNameKey: "名前: ",
  jakeDataNameValue: "ピットマン・ジェイク",
  jakeDataAgeKey: "年齢: ",
  jakeDataAgeValue: "不明",
  jakeDataLastSightedKey: "位置: ",
  jakeDataLastSightedValue: "日本, 地球",
  jakeDataRolesPerformedKey: "職務経験:",
  jakeDataRolesPerformedTeacher: "英語の教師",
  jakeDataRolesPerformedToolingEngineer: "ツールのエンジニア",
  jakeDataRolesPerformedFullStackEngineer: "フル・スタックのエンジニア",
  jakeDataRolesPerformedFrontEndEngineer: "フロントのエンジニア",
  jakeDataRolesPerformedDesignSystemsEngineer:
    "ディザイン・システムのエンジニア",
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
    "ターゲットの一番目大事なことはプログラミングですけど、暇の時に活動することでエネルギーを増やすそうです。",
  interestsDataExploringTitle: "自然の散策",
  interestsDataExploringText: "ターゲットは好奇心旺盛そうです。",
  interestsDataDivingTitle: "スキューバダイビング",
  interestsDataDivingText:
    "オーストラリアと、ニュージーランドと、タイの海に見られました。",
  interestsDataDronesTitle: "ドローン",
  interestsDataDronesText:
    "作ったり、修理したり、レースしたり、撮影したりするそうです。",
  interestsDataGuitarTitle: "ギター",
  interestsDataGuitarText: "地球で人気な楽器です。",
};

const contactData = {
  contactDataImJake: "初めまして！私はジェイクです。",
  contactDataMainBody:
    "五年間フロントのソフトエンジニアの仕事していて、喜んでお役に立ちます。良ければ、下のフォームで連絡して、話しましょう！",
  contactDataYourEmail: "あなたのメールアドレス:",
  contactDataYourMessage: "あなたのメッセージ:",
  contactDataSend: "送る",
};

const dashboard = {
  dashboardHome: "ホーム",
  dashboardJake: "ジェイク",
  dashboardInterests: "習慣",
  dashboardProjects: "作品",
  dashboardBlog: "ブログ",
  dashboardContact: "連絡",
};

const IncomingData = {
  incomingDataJakePitman: "ピットマン・ジェイク",
  incomingDataJeromeVI: "ジェローム・VI",
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
