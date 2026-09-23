import Job from "../models/Job";
export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({
            createdAt: -1,
        });
        return res.json({
            jobs,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to get jobs",
        });
    }
};
export const createJob = async (req, res) => {
    try {
        const { title, company, location, skills, description, experience, } = req.body;
        const job = await Job.create({
            title,
            company,
            location,
            skills,
            description,
            experience,
        });
        return res.status(201).json({
            message: "Job created",
            job,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Failed to create job",
        });
    }
};
