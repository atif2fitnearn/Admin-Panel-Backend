import { Request, Response } from "express";
import NewPage from "../models/NewPage";

export const getNewPage = async (req: Request, res: Response): Promise<any> => {
  try {
    const page = await NewPage.findOne();
    if (!page) {
      return res.status(404).json({ error: "Page not found" });
    }
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: "Error fetching page data" });
  }
};

export const createNewPage = async (req: Request, res: Response): Promise<any> => {
  try {
    const newPage = new NewPage(req.body);
    await newPage.save();
    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ error: "Error creating page" });
  }
};

export const updateNewPage = async (req: Request, res: Response) : Promise<any> => {
  try {
    const updatedPage = await NewPage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPage) {
      return res.status(404).json({ error: "Page not found" });
    }
    res.json(updatedPage);
  } catch (error) {
    res.status(500).json({ error: "Error updating page" });
  }
};

export const deleteNewPage = async (req: Request, res: Response) : Promise<any> => {
  try {
    const deletedPage = await NewPage.findByIdAndDelete(req.params.id);
    if (!deletedPage) {
      return res.status(404).json({ error: "Page not found" });
    }
    res.json({ message: "Page deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting page" });
  }
};


// {
//     "logoHeading": "Swasthi",
//     "subHeading": "Your Health Companion",
//     "heading": "Transform Your Health Journey with Swasthi",
//     "description": "Take charge of your BMI, BMR, and more with Swasthi.",
//     "appStoreButton": "Get on App Store",
//     "googlePlayButton": "Get on Google Play"
//   }
// PUT /api/new-page/:id
// DELETE /api/new-page/:id
//GET /api/new-page
