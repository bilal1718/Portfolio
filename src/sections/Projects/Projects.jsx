import styles from './ProjectsStyles.module.css';
import chat from '../../assets/chat.avif';
import netflix from '../../assets/netflix.avif';
import ecomm from '../../assets/ecomm.avif';
import book from '../../assets/book.avif';
import news from '../../assets/news.avif';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chat}
          link="https://github.com/bilal1718/chatApp"
          h3="Chatters"
          p="Chat App"
        />
        <ProjectCard
          src={netflix}
          link="https://github.com/bilal1718/netflixClone"
          h3="CineFlex"
          p="Netflix UI Clone"
        />
        <ProjectCard
          src={ecomm}
          link="https://github.com/bilal1718/Ecommerce_App"
          h3="Ecommerce"
          p="Materials Shop"
        />
        <ProjectCard
          src={book}
          link="https://github.com/bilal1718/BookStore_App"
          h3="BookStore"
          p="Books App"
        />
        <ProjectCard
          src={news}
          link="https://github.com/bilal1718/Blogify"
          h3="News Explorer"
          p="News App"
        />
      </div>
    </section>
  );
}

export default Projects;
