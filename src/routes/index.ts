import exp from 'express';
import user from './user.route';
import problems from './problems.route';
import contests from './contests.route';
import submissions from './submissions.route';
import verify from './verify.route';

const router = exp.Router();

router.use('/user', user);
router.use('/problems', problems);
router.use('/contests', contests);
router.use('/submissions', submissions);
router.use('/verify', verify);

// 404
router.all('*', function (_, res) {
  res.status(404).json({ message: '🤔 Are you lost ?!' });
});

export default router;