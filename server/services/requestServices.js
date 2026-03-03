import { SupervisorRequest } from "../models/supervisorRequest.js";

export const createRequest = async (requestData) => {
  const existingRequest = new SupervisorRequest.findOne({
    student: requestData.student,
    supervisor: requestData.supervisor,
    status: "pending",
  });
  if (existingRequest) {
    throw new Error(
      "You already have a request to this supervisor. Please wait for their response",
    );
  }

  const request = await SupervisorRequest.create(requestData);
  return await request.save();
};
