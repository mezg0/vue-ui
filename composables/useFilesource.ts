export const useFilesource = async (file: string) => {
  return await useFetch<string>(`/api/filesource?src=/components/${file}.vue`);
};

