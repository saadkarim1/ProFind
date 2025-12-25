import {
	IoBookmarkOutline,
	IoDocumentTextOutline,
	IoSettingsOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons/lib";
import { LuUser } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

export interface Position {
	width: number;
	left: number;
	opacity: number;
	height: number;
}

type Section = {
	path: string;
	name: string;
	icon: IconType;
};
export const UserProfileList: Section[] = [
	{ path: "/seeker", name: "profile", icon: LuUser },
	{
		path: "/seeker/career-information",
		name: "summary",
		icon: IoDocumentTextOutline,
	},
	{
		path: "/seeker/my-applications",
		name: "My applications",
		icon: MdWorkOutline,
	},
	{ path: "/seeker/saved", name: "saved", icon: IoBookmarkOutline },
	{ path: "/seeker/settings", name: "settings", icon: IoSettingsOutline },
];

export const RecruiterProfileList: Section[] = [
	{ path: "/recruiter", name: "company", icon: MdWorkOutline },
	{
		path: "/recruiter/summary",
		name: "summary",
		icon: IoDocumentTextOutline,
	},
	{ path: "/recruiter/settings", name: "settings", icon: IoSettingsOutline },
];

export type SeekerType = {
	user_id: string;
	name: string;
	about_me: string;
	phone: string;
	location: string;
	email: string;
	role: string;
	job: string;
};
