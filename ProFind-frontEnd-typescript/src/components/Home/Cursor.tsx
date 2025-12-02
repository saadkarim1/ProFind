import type { Position } from "../../models/model";
import { motion, type TargetAndTransition } from "framer-motion";

type CursorProps = { position: Position };
const Cursor: React.FC<CursorProps> = ({ position }) => {
	return (
		<motion.li
			animate={position as TargetAndTransition}
			className='rounded-full absolute bg-white z-0 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)]'
		/>
	);
};

export default Cursor;
