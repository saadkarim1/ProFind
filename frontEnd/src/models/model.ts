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
export const ProfileList: Section[] = [
	{ path: "/profile", name: "profile", icon: LuUser },
	{
		path: "/career-information",
		name: "summary",
		icon: IoDocumentTextOutline,
	},
	{
		path: "/my-applications",
		name: "My applications",
		icon: MdWorkOutline,
	},
	{ path: "/saved", name: "saved", icon: IoBookmarkOutline },
	{ path: "/settings", name: "settings", icon: IoSettingsOutline },
];
