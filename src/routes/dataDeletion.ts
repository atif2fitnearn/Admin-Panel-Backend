import express, { Request, Response } from 'express';
import  DataDeletionModel from '../models/dataDeletionModel'
const router = express.Router();
router.post('/datadeletion', async (req: Request, res: Response): Promise<any> => {
    const { content } = req.body; // Get content from request body
    
    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }
  
    try {
      const newContent = new DataDeletionModel({ content });
      await newContent.save(); // Save the content to the database
      return res.status(201).json({ message: 'Content saved successfully' });
    } catch (error) {
      console.error('Error saving content:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // GET /api/editor - Fetch saved editor content
  router.get('/datadeletion', async (req: Request, res: Response): Promise<any> => {
    try {
      const content = await DataDeletionModel.findOne().sort({ createdAt: -1 }); // Fetch the most recent content
      if (!content) {
        return res.status(404).json({ error: 'No content found' });
      }
      return res.json({ content: content.content });
    } catch (error) {
      console.error('Error fetching content:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.put("/datadeletion", async (req, res): Promise<any> => {
    const { content } = req.body;
  
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
  
    try {
      // Check if content already exists
      const existingContent = await DataDeletionModel.findOne();
      if (existingContent) {
        // If content exists, update it
        existingContent.content = content;
        // existingContent.updatedAt = Date.now();
        await existingContent.save();
        return res.status(200).json({ message: "Content updated successfully" });
      } else {
        // If no content exists, create a new entry
        const newContent = new DataDeletionModel({ content });
        await newContent.save();
        return res.status(201).json({ message: "Content saved successfully" });
      }
    } catch (error) {
      console.error("Error updating content:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  
  export default router;