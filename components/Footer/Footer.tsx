import { getFooter } from '@/actions/footer';
import styles from './footer.module.scss';

export const Footer = async () => {
  const { data } = await getFooter();
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {data.columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.linkList}>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>{data.company.copyright}</p>
        <p className={styles.companyName}>{data.company.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
