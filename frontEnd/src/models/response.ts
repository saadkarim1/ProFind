// export type SuccessResponse<T> = {
// 	success: boolean;
// 	message: "success";
// 	data: T;
// 	status: Number;
// };
// export type ErrorResponse = {
// 	success: boolean;
// 	message: "Failed";
// 	errors: string;
// 	status: Number;
// };

export type ApiResponse<T> = {
	message: "success" | "Failed";
	errors?: string;
	data: T;
	status: Number;
};
