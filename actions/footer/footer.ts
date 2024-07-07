import axios from 'axios';

interface Link {
  name: string;
  url: string;
}

interface Column {
  title: string;
  links: Link[];
}

interface Company {
  name: string;
  copyright: string;
}

interface FooterData {
  company: Company;
  columns: Column[];
}

interface ApiResponse {
  data: FooterData;
}

export const getFooter = async (): Promise<ApiResponse> => {
  const { data } = await axios.get<FooterData>(
    'https://stock-exchange.fancy-app.site/api/footer',
  );
  return { data };
};
