// import { Router } from 'express';
// import { getAboutUs, saveAboutUs } from '../controllers/aboutUsController';

// const router = Router();

// // Endpoint to get About Us content
// router.get('/aboutus', getAboutUs);

// // Endpoint to save/update About Us content
// router.post('/aboutus', saveAboutUs);

// export default router;


// import { Router, Request, Response } from 'express';
// import aboutUsModel from '../models/aboutUsModel';
// const router = Router();
// // router.get('/api/aboutus', async (req, res) : Promise<any>=> {
// //     try {
// //       const aboutUs = await aboutUsModel.findOne();
// //       if (!aboutUs) {
// //         return res.status(404).json({ message: 'About Us content not found.' });
// //       }
// //       res.status(200).json(aboutUs);
// //     } catch (error) {
// //       console.error('Error fetching About Us content:', error);
// //       res.status(500).json({ message: 'Error fetching About Us content.', error });
// //     }
// //   });
  
// //   // Save or update About Us content
// //   router.post('/api/aboutus', async (req, res): Promise<any> => {
// //     const { content } = req.body;
 
  
// //     if (!content) {
// //       return res.status(400).json({ message: 'Content is required.' });
// //     }
  
// //     try {
// //       let aboutUs = await aboutUsModel.findOne();
  
// //       if (aboutUs) {
// //         // Update existing content
// //         aboutUs.content = content;
// //         aboutUs.updatedAt = new Date();
// //         await aboutUs.save();
// //         console.log('Content updated successfully:', aboutUs);
// //         return res.status(200).json({ message: 'Content updated successfully.', data: aboutUs });
// //       }
  
// //       // Create new content if none exists
// //       aboutUs = new aboutUsModel({ content });
// //       await aboutUs.save();
// //       console.log('Content created successfully:', aboutUs);
// //       res.status(201).json({ message: 'Content created successfully.', data: aboutUs });
// //     } catch (error) {
// //       console.error('Error saving About Us content:', error);
// //       res.status(500).json({ message: 'Error saving About Us content.', error });
// //     }

// //   });


// // app.post('/api/aboutus', async (req: Request, res: Response) => {
// //   const { content }: { content: object } = req.body;

// //   try {
// //     let aboutUs = await AboutUs.findOne();
// //     if (aboutUs) {
// //       // Update existing content
// //       aboutUs.content = content;
// //       aboutUs.updatedAt = new Date();
// //       await aboutUs.save();
// //     } else {
// //       // Create new content
// //       aboutUs = new AboutUs({ content });
// //       await aboutUs.save();
// //     }

// //     res.status(200).json({ message: 'Content saved successfully!' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error saving content', error });
// //   }
// // });


// // router.get('/api/aboutus', async (req: Request, res: Response): Promise<any> => {
// //     try {
// //       const aboutUs = await aboutUsModel.findOne();
// //       if (!aboutUs) {
// //         res.status(200).json({ content: {}, updatedAt: null });
// //       } else {
// //         res.status(200).json(aboutUs);
// //       }
// //     } catch (error) {
// //       res.status(500).json({ message: 'Error fetching content', error });
// //     }
// //   });
  
//   // Save/Update "About Us" content
// //   router.post('/api/aboutus', async (req: Request, res: Response): Promise<any> => {
// //     console.log('Received request body:', req.body)
// //     const { content }: { content: object } = req.body;
  
// //     try {
// //       let aboutUs = await aboutUsModel.findOne();
// //       if (aboutUs) {
// //         // Update existing content
// //         aboutUs.content = content;
// //         aboutUs.updatedAt = new Date();
// //         await aboutUs.save();
// //       } else {
// //         // Create new content
// //         aboutUs= new aboutUsModel({ content });
// //         // await aboutUsModel.save();
// //       }
  
// //       res.status(200).json({ message: 'Content saved successfully!' });
// //     } catch (error) {
// //       res.status(500).json({ message: 'Error saving content', error });
// //     }
// //   });
// router.post('/api/aboutus', async (req, res): Promise<any> => {
//     console.log('POST /api/aboutus received');
//     console.log('Request Body:', req.body);
  
//     const { content } = req.body;
  
//     if (!content) {
//       return res.status(400).json({ error: 'Content is required' });
//     }
  
//     try {
//       const newContent = new aboutUsModel({ content });
//       await newContent.save();
//       console.log('Content saved:', newContent);
//       res.status(201).json({ message: 'Content saved successfully' });
//     } catch (err) {
//       console.error('Error saving content:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   router.get('/api/aboutus', async (req, res): Promise<any> => {
//     try {
//       const content = await aboutUsModel.findOne().sort({ _id: -1 });
//       res.status(200).json({ content: content?.content || null });
//     } catch (err) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
//   export default router;
// import express, { Request, Response } from 'express';
// import aboutUsModel from '../models/aboutUsModel';
// // routes/editorContent.ts



// const router = express.Router();

// // POST /api/editor - Save editor content
// router.post('/aboutus', async (req: Request, res: Response): Promise<any> => {
//   const { content } = req.body; // Get content from request body
  
//   if (!content) {
//     return res.status(400).json({ error: 'Content is required' });
//   }

//   try {
//     const newContent = new aboutUsModel({ content });
//     await newContent.save(); // Save the content to the database
//     return res.status(201).json({ message: 'Content saved successfully' });
//   } catch (error) {
//     console.error('Error saving content:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // GET /api/editor - Fetch saved editor content
// router.get('/aboutus', async (req: Request, res: Response): Promise<any> => {
//   try {
//     const content = await aboutUsModel.findOne().sort({ createdAt: -1 }); // Fetch the most recent content
//     if (!content) {
//       return res.status(404).json({ error: 'No content found' });
//     }
//     return res.json({ content: content.content });
//   } catch (error) {
//     console.error('Error fetching content:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });
// router.put('/aboutus', async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { content } = req.body; // Extract the new content from the request body

//     if (!content) {
//       return res.status(400).json({ error: 'Content is required' });
//     }

//     // Update the most recent content or create one if it doesn't exist
//     const updatedContent = await aboutUsModel.findOneAndUpdate(
//       {},
//       { content, updatedAt: new Date() },
//       { new: true, upsert: true } // Create a new document if none exists
//     );

//     return res.json({ message: 'Content updated successfully', content: updatedContent });
//   } catch (error) {
//     console.error('Error updating content:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });


// export default router;




// for testing post
// {
//     "content": {
//       "time": 1683157342720,
//       "blocks": [
//         {
//           "type": "header",
//           "data": {
//             "text": "About Us",
//             "level": 1
//           }
//         },
//         {
//           "type": "paragraph",
//           "data": {
//             "text": "Welcome to our website. We are excited to have you here."
//           }
//         }
//       ]
//     }
//   }
  


// routes/editorContent.ts
// import express, { Request, Response } from "express";
// import aboutUsModel from "../models/aboutUsModel";

// const router = express.Router();

// // POST /api/aboutus - Save new content
// router.post("/aboutus", async (req: Request, res: Response): Promise<any> => {
//   const { content } = req.body;

//   if (!content) {
//     return res.status(400).json({ error: "Content is required" });
//   }

//   try {
//     // Ensure only one entry is saved
//     const existingContent = await aboutUsModel.findOne();
//     if (existingContent) {
//       return res.status(400).json({ error: "Content already exists. Use PUT to update." });
//     }

//     const newContent = new aboutUsModel({ content });
//     await newContent.save();
//     return res.status(201).json({ message: "Content saved successfully" });
//   } catch (error) {
//     console.error("Error saving content:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// // GET /api/aboutus - Fetch saved content
// router.get("/aboutus", async (req: Request, res: Response): Promise<any> => {
//   try {
//     const content = await aboutUsModel.findOne().sort({ createdAt: -1 });
//     if (!content) {
//       return res.status(404).json({ error: "No content found" });
//     }
//     return res.json({ content: content.content });
//   } catch (error) {
//     console.error("Error fetching content:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// // PUT /api/aboutus - Update existing content
// router.put("/aboutus", async (req: Request, res: Response): Promise<any> => {
//   const { content } = req.body;

//   if (!content) {
//     return res.status(400).json({ error: "Content is required" });
//   }

//   try {
//     const updatedContent = await aboutUsModel.findOneAndUpdate(
//       {}, // Match the first document
//       { content, updatedAt: new Date() },
//       { new: true, upsert: true } // Update or insert if not found
//     );
//     return res.json({ message: "Content updated successfully", content: updatedContent });
//   } catch (error) {
//     console.error("Error updating content:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// export default router;


import express, { Request, Response } from "express";
import aboutUsModel from "../models/aboutUsModel";

const router = express.Router();

// POST /api/aboutus - Save new content
router.post("/aboutus", async (req: Request, res: Response): Promise<any> => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  try {
    // Ensure only one entry is saved
    const existingContent = await aboutUsModel.findOne();
    if (existingContent) {
      return res.status(400).json({ error: "Content already exists. Use PUT to update." });
    }

    const newContent = new aboutUsModel({ content });
    await newContent.save();
    return res.status(201).json({ message: "Content saved successfully" });
  } catch (error) {
    console.error("Error saving content:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/aboutus - Fetch saved content
router.get("/aboutus", async (req: Request, res: Response): Promise<any> => {
  try {
    const content = await aboutUsModel.findOne().sort({ createdAt: -1 });
    if (!content) {
      return res.status(404).json({ error: "No content found" });
    }
    return res.json({ content: content.content });
  } catch (error) {
    console.error("Error fetching content:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/aboutus", async (req, res): Promise<any> => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  try {
    // Check if content already exists
    const existingContent = await aboutUsModel.findOne();
    if (existingContent) {
      // If content exists, update it
      existingContent.content = content;
      // existingContent.updatedAt = Date.now();
      await existingContent.save();
      return res.status(200).json({ message: "Content updated successfully" });
    } else {
      // If no content exists, create a new entry
      const newContent = new aboutUsModel({ content });
      await newContent.save();
      return res.status(201).json({ message: "Content saved successfully" });
    }
  } catch (error) {
    console.error("Error updating content:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /api/aboutus - Update existing content
// router.put("/aboutus", async (req: Request, res: Response): Promise<any> => {
//   const { content } = req.body;

//   if (!content) {
//     return res.status(400).json({ error: "Content is required" });
//   }

//   try {
//     const updatedContent = await aboutUsModel.findOneAndUpdate(
//       {}, // Match the first document
//       { content, updatedAt: new Date() },
//       { new: true, upsert: true } // Update or insert if not found
//     );
//     return res.json({ message: "Content updated successfully", content: updatedContent });
//   } catch (error) {
//     console.error("Error updating content:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

export default router;
