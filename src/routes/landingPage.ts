// // import { Router } from 'express';

// // import LandingPage from '../models/LandingPage';

// // const router = Router();

// // // Get All Landing Pages
// // router.get('/', async (req, res) => {
// //   const { search, status, date } = req.query;

// //   const query: any = {};

// //   if (search) {
// //     query.$or = [
// //       { landingPageId: { $regex: search, $options: 'i' } },
// //       { applicationName: { $regex: search, $options: 'i' } },
// //     ];
// //   }

// //   if (status) {
// //     query.status = status;
// //   }

// //   if (date) {
// //     query.date = new Date(date as string);
// //   }

// //   try {
// //     const landingPages = await LandingPage.find(query);
// //     res.json(landingPages);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error fetching landing pages' });
// //   }
// // });

// // // Get Single Landing Page
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const landingPage = await LandingPage.findOne({ landingPageId: req.params.id });
// //     if (!landingPage) return res.status(404).json({ error: 'Landing page not found' });
// //     res.json(landingPage);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error fetching landing page' });
// //   }
// // });

// // // Create Landing Page
// // router.post('/', async (req, res) => {
// //   try {
// //     const newLandingPage = new LandingPage(req.body);
// //     await newLandingPage.save();
// //     res.status(201).json(newLandingPage);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error creating landing page' });
// //   }
// // });

// // // Update Landing Page
// // router.put('/:id', async (req, res) => {
// //   try {
// //     const updatedLandingPage = await LandingPage.findOneAndUpdate(
// //       { landingPageId: req.params.id },
// //       req.body,
// //       { new: true }
// //     );
// //     if (!updatedLandingPage) return res.status(404).json({ error: 'Landing page not found' });
// //     res.json(updatedLandingPage);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error updating landing page' });
// //   }
// // });

// // // Delete Landing Pages
// // router.delete('/', async (req, res) => {
// //   const { ids } = req.body;
// //   try {
// //     await LandingPage.deleteMany({ landingPageId: { $in: ids } });
// //     res.json({ message: 'Landing pages deleted successfully' });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error deleting landing pages' });
// //   }
// // });

// // export default router;



// import { Router, Request, Response } from 'express';
// import LandingPage from '../models/LandingPage';

// const router = Router();

// // Get All Landing Pages
// router.get('/', async (req: Request, res: Response) => {
//   const { search, status, date } = req.query;

//   const query: any = {};

//   if (search) {
//     query.$or = [
//       { landingPageId: { $regex: search, $options: 'i' } },
//       { applicationName: { $regex: search, $options: 'i' } },
//     ];
//   }

//   if (status) {
//     query.status = status;
//   }

//   if (date) {
//     const parsedDate = new Date(date as string);
//     if (!isNaN(parsedDate.getTime())) {
//       query.date = parsedDate;
//     } else {
//       return res.status(400).json({ error: 'Invalid date format' });
//     }
//   }

//   try {
//     const landingPages = await LandingPage.find(query);
//     res.json(landingPages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error fetching landing pages' });
//   }
// });

// // Get Single Landing Page
// router.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
//   try {
//     const landingPage = await LandingPage.findOne({ landingPageId: req.params.id });
//     if (!landingPage) {
//       return res.status(404).json({ error: 'Landing page not found' });
//     }
//     res.json(landingPage);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error fetching landing page' });
//   }
// });

// // Create Landing Page
// router.post('/', async (req: Request, res: Response) => {
//   try {
//     const newLandingPage = new LandingPage(req.body);
//     await newLandingPage.save();
//     res.status(201).json(newLandingPage);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error creating landing page' });
//   }
// });

// // Update Landing Page
// router.put('/:id', async (req: Request<{ id: string }>, res: Response) => {
//   try {
//     const updatedLandingPage = await LandingPage.findOneAndUpdate(
//       { landingPageId: req.params.id },
//       req.body,
//       { new: true, runValidators: true } // Ensures validations are applied
//     );
//     if (!updatedLandingPage) {
//       return res.status(404).json({ error: 'Landing page not found' });
//     }
//     res.json(updatedLandingPage);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error updating landing page' });
//   }
// });

// // Delete Landing Pages
// router.delete('/', async (req: Request, res: Response) => {
//   const { ids } = req.body;

//   if (!Array.isArray(ids) || ids.length === 0) {
//     return res.status(400).json({ error: 'Invalid request, "ids" must be a non-empty array' });
//   }

//   try {
//     await LandingPage.deleteMany({ landingPageId: { $in: ids } });
//     res.json({ message: 'Landing pages deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error deleting landing pages' });
//   }
// });

// export default router;

import { Router, Request, Response } from 'express';
import LandingPage from '../models/LandingPage';

const router = Router();

// Get All Landing Pages
router.get('/', async (req: Request, res: Response): Promise<any> => {
  const { search, status, date } = req.query;

  const query: any = {};

  if (search) {
    query.$or = [
      { landingPageId: { $regex: search, $options: 'i' } },
      { applicationName: { $regex: search, $options: 'i' } },
    ];
  }

  if (status) {
    query.status = status;
  }

  if (date) {
    query.date = new Date(date as string);
  }

  try {
    const landingPages = await LandingPage.find(query);
    res.json(landingPages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching landing pages' });
  }
});

// Get Single Landing Page by ID
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const landingPage = await LandingPage.findOne({ landingPageId: req.params.id });
    if (!landingPage) {
      return res.status(404).json({ error: 'Landing page not found' });
    }
    res.json(landingPage);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching landing page' });
  }
});

// Create Landing Page
router.post('/api/add', async (req: Request, res: Response) => {
  try {
    const newLandingPage = new LandingPage(req.body);
    await newLandingPage.save();
    res.status(201).json(newLandingPage);
  } catch (error) {
    res.status(500).json({ error: 'Error creating landing page' });
  }
});

// Update Landing Page by ID
// router.put('/:id', async (req: Request<{ id: string }>, res: Response): Promise<any> => {
//   try {
//     const updatedLandingPage = await LandingPage.findOneAndUpdate(
//       { landingPageId: req.params.id },
//       req.body,
//       { new: true }
//     );
//     if (!updatedLandingPage) {
//       return res.status(404).json({ error: 'Landing page not found' });
//     }
//     res.json(updatedLandingPage);
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating landing page' });
//   }
// });
router.put('/:id', async (req: Request<{ id: string }>, res: Response): Promise<any> => {
  try {
    const updatedLandingPage = await LandingPage.findOneAndUpdate(
      { landingPageId: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedLandingPage) {
      return res.status(404).json({ error: 'Landing page not found' });
    }
    res.json(updatedLandingPage);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error updating landing page' });
    }
  }
});

// Delete Landing Pages
router.delete('/', async (req: Request, res: Response) => {
  const { ids } = req.body;
  try {
    await LandingPage.deleteMany({ landingPageId: { $in: ids } });
    res.json({ message: 'Landing pages deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting landing pages' });
  }
});

export default router;

