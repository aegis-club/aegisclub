import type { Member, MemberCardProps, SocialLinkProps } from "./types";
import { facultyMembers } from "./Faculty";
import { fourthYearMembers } from "./FourthYear";
import { thirdYearMembers } from "./ThirdYear";
import { secondYearMembers } from "./SecondYear";

export type { Member, MemberCardProps, SocialLinkProps };

export const members: Member[] = [
  ...facultyMembers,
  ...fourthYearMembers,
  ...thirdYearMembers,
  ...secondYearMembers,
];
