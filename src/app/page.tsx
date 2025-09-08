'use client';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';
import FadeIn from '@/components/FadeIn';
import Avatar from '@mui/material/Avatar'
import {

  Grid,
  Box,
  Paper,
  Typography,
  Chip,
} from '@mui/material'

const projects = [

  {
    title: 'BonusNow',
    description: 'A bonus and incentive planning tool.',
    imageUrl: '/images/bonus.png',
    projectUrl: 'https://bonusnow-1.onrender.com/'
  },
  {
    title: 'TO DO MANAGER',
    description: 'A personal kanban board to manage your tasks.',
    imageUrl: '/images/Task Manager.png',
    projectUrl: 'https://to-do-list-manager-nu.vercel.app/'
  },
  {
    title: 'TIME ALLOCATOR',
    description: 'AI Powered tool that helps you allocate your time efficiently.',
    imageUrl: '/images/time-allocator.png',
    projectUrl: 'https://time-allocator.vercel.app/'
  },
  {
    title: 'NOTE CAPTURE',
    description: 'Documentation for the RESTful API for my note-taking application.',
    imageUrl: '/images/notes_api_ss.png',
    projectUrl: 'https://note-capture.onrender.com/api-docs/#/'
  }
 
  // Add more projects here

];

export default function Home() {
  return (
    <main>
      <Header />
      
      <section className="max-w-6xl mx-auto px-4 py-16">
      <FadeIn duration={150}><h2 className="text-3xl font-bold mb-8 text-center">Projects</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <FadeIn key={project.title} duration={150}>
              <ProjectCard
                {...project}
              />
            </FadeIn>
          ))}
        </div>
      </section>
      <FadeIn duration={150}><SocialLinks /></FadeIn>

      {/* Skills */}
      <div className="padded-bottom div-skills">
        <Typography gutterBottom variant="h3" component="div">
          Skills
        </Typography>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {/* Frontend */}
            <Grid>
              <Paper square elevation={0}>
                <h3>Frontend</h3>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip
                    avatar={<Avatar src="react1.png"></Avatar>}
                    label="React"
                  />
                  <Chip
                    avatar={<Avatar src="svelte1.png"></Avatar>}
                    label="Svelte"
                  />
                  <Chip
                    avatar={<Avatar src="tailwind.png"></Avatar>}
                    label="Tailwind CSS"
                  />
                  <Chip
                    avatar={<Avatar src="vite.png"></Avatar>}
                    label="Vite"
                  />
                  <Chip
                    avatar={<Avatar src="mui.png"></Avatar>}
                    label="Material UI"
                  />
                </Box>
              </Paper>
              <br></br>
            </Grid>

            {/* Backend */}
            <Grid>
              <Paper square elevation={0}>
                <h3>Backend</h3>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip avatar={<Avatar src="go1.png"></Avatar>} label="Go" />
                  <Chip
                    avatar={<Avatar src="node1.png"></Avatar>}
                    label="Node.js"
                  />
                  <Chip
                    avatar={<Avatar src="typescript1.png"></Avatar>}
                    label="TypeScript"
                  />
                  <Chip
                    avatar={<Avatar src="jest1.png"></Avatar>}
                    label="Jest"
                  />
                  <Chip
                    avatar={<Avatar src="gql.png"></Avatar>}
                    label="GraphQL"
                  />
                  <Chip
                    avatar={<Avatar src="rest.png"></Avatar>}
                    label="REST"
                  />
                  <Chip
                    avatar={<Avatar src="mongo.png"></Avatar>}
                    label="MongoDB"
                  />
                  <Chip
                    avatar={<Avatar src="pgsql.png"></Avatar>}
                    label="PostreSQL"
                  />
                  <Chip
                    avatar={<Avatar src="serverless.png"></Avatar>}
                    label="Serverless"
                  />
                  <Chip
                    avatar={<Avatar src="rabbit.png"></Avatar>}
                    label="RabbitMQ"
                  />
                  <Chip
                    avatar={<Avatar src="sequelize.png"></Avatar>}
                    label="Sequelize"
                  />
                  <Chip
                    avatar={<Avatar src="mongoose.png"></Avatar>}
                    label="Mongoose"
                  />
                </Box>
              </Paper>
              <br></br>
            </Grid>

            {/* Infrastructure */}
            <Grid>
              <Paper square elevation={0}>
                <h3>Infrastructure</h3>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip
                    avatar={<Avatar src="docker.png"></Avatar>}
                    label="Docker"
                  />
                  <Chip
                    avatar={<Avatar src="kubernetes.png"></Avatar>}
                    label="Kubernetes"
                  />
                  <Chip avatar={<Avatar src="aws1.png"></Avatar>} label="AWS" />
                  <Chip
                    avatar={<Avatar src="prometheus.png"></Avatar>}
                    label="Prometheus"
                  />
                  <Chip
                    avatar={<Avatar src="sentry.png"></Avatar>}
                    label="Sentry"
                  />
                  <Chip
                    avatar={<Avatar src="github1.png"></Avatar>}
                    label="Github"
                  />
                  <Chip
                    avatar={<Avatar src="bitbucket.png"></Avatar>}
                    label="Bitbucket"
                  />
                </Box>
              </Paper>
              <br></br>
            </Grid>
          </Grid>
          </Box>
      </div>
    </main>
  );
}