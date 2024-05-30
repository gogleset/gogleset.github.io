"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { myMdxs } from "@/app/util/mdx";
import { Frontmatter } from "../components/Posts/Content";

type MDXContext = {
  file?: {
    name: string;
    set: Dispatch<SetStateAction<string>>;
  };
  frontmatter: Frontmatter[];
  filteringFile: () => Frontmatter[] | [];
  filteringTag: () => string[] | [];
};

// initalizing context
export const MDXContext = createContext<MDXContext>({
  file: undefined,
  frontmatter: [],
  filteringFile: () => [],
  filteringTag: () => [],
});

//MDXContext Provider
type MDXContextProviderProps = {
  children: ReactNode;
};

export function MDXContextProvider({ children }: MDXContextProviderProps) {
  const [filename, setFilename] = useState<string>("");

  const [frontmatterState, setFrontmatter] = useState<Frontmatter[]>([]);

  const init = async () => {
    console.log("init");
    try {
      const filtering = (await myMdxs()).map((item) => item.frontmatter);
      // console.log(filtering);
      setFrontmatter(filtering);
    } catch (error) {
      console.error(error, "asd");
    }
  };
  // console.log(frontmatterState, "frontmatter");
  const filteringFile = () => {
    if (filename) {
      if (filename.length > 1) {
        return frontmatterState.filter((item) => {
          return item.title.includes(filename) || item.tag.includes(filename);
        });
      }
    }
    return [];
  };
  const filteringTag = () => {
    const filter = frontmatterState
      .map((item) => {
        return item.tag;
      })
      .flat();
    return Array.from(new Set(filter));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <MDXContext.Provider
      value={{
        file: { name: filename, set: setFilename },
        frontmatter: frontmatterState,
        filteringFile,
        filteringTag,
      }}>
      {children}
    </MDXContext.Provider>
  );
}
