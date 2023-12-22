namespace Api {
  namespace EventAgenda {
    interface IFetchResults {
      success: boolean;
      data: IData | null;
      isLoading: boolean;
      error: Error | null;
    }

    interface IData {
      title: string;
      slug: string;
      post_type: string;
      post_id: number;
      lang: string;
      nr_of_blocks: number;
      block_list: string[];
      blocks: IBlock[];
      featured_image: any[];
      author: any[];
      post_date: string;
      taxonomies: any[];
      forms: any[];
      translation: ITranslation;
      seo: ISeo;
      meta: IMeta;
    }

    interface IBlock {
      BlockName: string;
      attrs: IAttrs;
      innerBlocks: IInnerBlock[];
      innerHTML: string;
      innerContent: string;
    }

    interface IAttrs {
      intro: string;
      heading: string;
    }

    interface IInnerBlock {
      BlockName: string;
      attrs: IAttrs2;
      innerBlocks: IInnerBlock2[];
      innerHTML: string;
      innerContent: string | undefined[];
    }

    interface IAttrs2 {
      title: string;
      startTime: string;
      duration: number;
      category: string;
      day: string;
      speakerList: ISpeakerList[];
      coverImage?: ICoverImage;
    }

    interface ISpeakerList {
      id: number;
      name: string;
      position: string;
      image: IImage;
      company_logo: ICompanyLogo[];
    }

    interface IImage {
      id: number;
      url: string;
      alt: string;
      srcset: string;
    }

    interface ICompanyLogo {
      mediaId: number;
      mediaUrl: string;
      sizes: ISizes;
    }

    interface ISizes {
      full: IFull;
    }

    interface IFull {
      url: string;
    }

    interface ICoverImage {
      id: number;
      url: string;
      alt: string;
    }

    interface IInnerBlock2 {
      blockName: string;
      attrs: any[];
      innerBlocks: any[];
      innerHTML: string;
      innerContent: string[];
    }

    interface ITranslation {
      en: ILanguage;
      ja: ILanguage;
      cn: ILanguage;
      tw: ILanguage;
    }

    interface ILanguage {
      id: number;
      url: string;
      locale: string;
    }

    interface ISeo {
      canonical: string;
      description: string;
      title: string;
      site_name: string;
      wordpress_site_name: string;
      site_url: string;
      company_name: string;
      company_logo_id: number;
      schema_page_type: string[];
      main_schema_id: string;
      meta_description: string;
      robots: IRobots;
      googlebot: any;
      rel_next: string;
      rel_prev: string;
      open_graph_enabled: boolean;
      open_graph_publisher: string;
      open_graph_type: string;
      open_graph_title: string;
      open_graph_description: string;
      open_graph_images: IOpenGraphImages;
      open_graph_url: string;
      open_graph_site_name: string;
      open_graph_article_publisher: string;
      open_graph_article_author: string;
      open_graph_article_published_time: string;
      open_graph_article_modified_time: string;
      open_graph_locale: string;
      schema: ISchema;
      twitter_card: string;
      twitter_title: string;
      twitter_description: string;
      twitter_image: string;
      twitter_creator: string;
      twitter_site: string;
      placid_social_images: IPlacidSocialImage[];
    }

    interface IRobots {
      index: string;
      follow: string;
      "max-snippet": string;
      "max-image-preview": string;
      "max-video-preview": string;
    }

    interface IOpenGraphImages {
      string: IHttpsStaging17O9solutionsComWpContentUploads202007O9FooterBw1Jpg;
    }

    interface IHttpsStaging17O9solutionsComWpContentUploads202007O9FooterBw1Jpg {
      width: number;
      height: number;
      url: string;
      path: string;
      size: string;
      id: number;
      alt: string;
      pixels: number;
      type: string;
    }

    interface ISchema {
      "@context": string;
      "@graph": IGraph[];
    }

    interface IGraph {
      "@type": string;
      "@id": string;
      url: string;
      name: string;
      isPartOf?: IIsPartOf;
      datePublished?: string;
      dateModified?: string;
      inLanguage?: string;
      potentialAction?: IPotentialAction[];
      description?: string;
      publisher?: IPublisher;
      logo?: ILogo;
      image?: IImage2;
      sameAs?: string[];
    }

    interface IIsPartOf {
      "@id": string;
    }

    interface IPotentialAction {
      "@type": string;
      target: any;
      "query-input"?: string;
    }

    interface IPublisher {
      "@id": string;
    }

    interface ILogo {
      "@type": string;
      inLanguage: string;
      "@id": string;
      url: string;
      contentUrl: string;
      width: number;
      height: number;
      caption: string;
    }

    interface IImage2 {
      "@id": string;
    }

    interface IPlacidSocialImage {
      built_from: string;
      template: string;
      url: string;
      width: number;
      height: number;
      status: string;
      path: any;
      filename: string;
    }

    interface IMeta {
      color_theme: string;
      color_theme_header: string;
      color_theme_footer: string;
      is_aimtenx: boolean;
    }
  }
}
