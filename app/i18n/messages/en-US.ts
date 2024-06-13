import { LOCALES } from "../constants";

const dialogue = {
  interestsDialogue1:
    "That looks like a 'whale shark' - a large aquatic species found only on Earth.",
  interestsDialogue2:
    "If this is what he does in his spare time, we might need a snorkel to find this guy.",
  interestsDialogue3:
    "Sending through information on the target's habits and interests.",
  blogDialogue1: "Hmm what else can we find out about this guy..?",
  blogDialogue2: "Let me see if I can dig up some more info...",
  blogDialogue3: "...",
  blogDialogue4: "Wait, this is..!",
  blogDialogue5: "I've hacked into his diary.",
  blogDialogue6: "You can thank me later ~",
  contactDialogue1: "That's cute.",
  contactDialogue2: "If only he were that easy to find...",
  contactDialogue3: "Wait! I'm getting a transmission.",
  contactDialogue4: "It's him..!!",
  jakeDialogue1: "Woah! Did you see that??",
  jakeDialogue2: "That... kinda looks like our target, doesn't it?",
  jakeDialogue3: "We must be getting close!",
  jakeDialogue4: "Let me do a scan on this place...",
  jakeDialogue5: "...",
  jakeDialogue6: "Found something! Looks like some info on the target.",
  jakeDialogue7: "Sending it through now.",
  projectsDialogue1: "Do you think the prophecy is true?",
  projectsDialogue2:
    "That the target's engineering skills will bring victory to the Resistance?",
  projectsDialogue3: "Let's take a look at some of the things he's built...",
  projectsDialogue4: "Woah! This is impressive!",
  projectsDialogue5: "Here, check it out.",
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

const messages = {
  [LOCALES.ENGLISH]: {
    ...dialogue,
    ...jakeData,
  },
};
export default messages;
