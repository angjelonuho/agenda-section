namespace Api {
  namespace EventAgenda {
    interface IFetchResults {
      data: Data | null;
      isLoading: boolean;
      error: Error | null;
    }

    interface Data {
      title: string;
      slug: string;
      post_type: string;
      post_id: number;
      lang: string;
      nr_of_blocks: number;
      block_list: string[];
      blocks: Block[];
      featured_image: any[];
      author: any[];
      post_date: string;
      taxonomies: any[];
      forms: any[];
      translation: Translation;
      seo: Seo;
      meta: Meta;
    }

    interface Block {
      blockName: string;
      attrs: Attrs;
      innerBlocks: InnerBlock[];
      innerHTML: string;
      innerContent: string;
    }

    interface Attrs {
      intro: string;
      heading: string;
    }

    interface InnerBlock {
      blockName: string;
      attrs: Attrs2;
      innerBlocks: InnerBlock2[];
      innerHTML: string;
      innerContent: string | undefined[];
    }

    interface Attrs2 {
      title: string;
      startTime: string;
      duration: number;
      category: string;
      day: string;
      speakerList: SpeakerList[];
      coverImage?: CoverImage;
    }

    interface SpeakerList {
      id: number;
      name: string;
      position: string;
      image: Image;
      company_logo: CompanyLogo[];
    }

    interface Image {
      id: number;
      url: string;
      alt: string;
      srcset: string;
    }

    interface CompanyLogo {
      mediaId: number;
      mediaUrl: string;
      sizes: Sizes;
    }

    interface Sizes {
      full: Full;
    }

    interface Full {
      url: string;
    }

    interface CoverImage {
      id: number;
      url: string;
      alt: string;
    }

    interface InnerBlock2 {
      blockName: string;
      attrs: any[];
      innerBlocks: any[];
      innerHTML: string;
      innerContent: string[];
    }

    interface Translation {
      en: En;
      ja: Ja;
      cn: Cn;
      tw: Tw;
    }

    interface En {
      id: number;
      url: string;
      locale: string;
    }

    interface Ja {
      id: number;
      url: string;
      locale: string;
    }

    interface Cn {
      id: number;
      url: string;
      locale: string;
    }

    interface Tw {
      id: number;
      url: string;
      locale: string;
    }

    interface Seo {
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
      robots: Robots;
      googlebot: any;
      rel_next: string;
      rel_prev: string;
      open_graph_enabled: boolean;
      open_graph_publisher: string;
      open_graph_type: string;
      open_graph_title: string;
      open_graph_description: string;
      open_graph_images: OpenGraphImages;
      open_graph_url: string;
      open_graph_site_name: string;
      open_graph_article_publisher: string;
      open_graph_article_author: string;
      open_graph_article_published_time: string;
      open_graph_article_modified_time: string;
      open_graph_locale: string;
      schema: Schema;
      twitter_card: string;
      twitter_title: string;
      twitter_description: string;
      twitter_image: string;
      twitter_creator: string;
      twitter_site: string;
      placid_social_images: PlacidSocialImage[];
    }

    interface Robots {
      index: string;
      follow: string;
      "max-snippet": string;
      "max-image-preview": string;
      "max-video-preview": string;
    }

    interface OpenGraphImages {
      string: HttpsStaging17O9solutionsComWpContentUploads202007O9FooterBw1Jpg;
    }

    interface HttpsStaging17O9solutionsComWpContentUploads202007O9FooterBw1Jpg {
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

    interface Schema {
      "@context": string;
      "@graph": Graph[];
    }

    interface Graph {
      "@type": string;
      "@id": string;
      url: string;
      name: string;
      isPartOf?: IsPartOf;
      datePublished?: string;
      dateModified?: string;
      inLanguage?: string;
      potentialAction?: PotentialAction[];
      description?: string;
      publisher?: Publisher;
      logo?: Logo;
      image?: Image2;
      sameAs?: string[];
    }

    interface IsPartOf {
      "@id": string;
    }

    interface PotentialAction {
      "@type": string;
      target: any;
      "query-input"?: string;
    }

    interface Publisher {
      "@id": string;
    }

    interface Logo {
      "@type": string;
      inLanguage: string;
      "@id": string;
      url: string;
      contentUrl: string;
      width: number;
      height: number;
      caption: string;
    }

    interface Image2 {
      "@id": string;
    }

    interface PlacidSocialImage {
      built_from: string;
      template: string;
      url: string;
      width: number;
      height: number;
      status: string;
      path: any;
      filename: string;
    }

    interface Meta {
      color_theme: string;
      color_theme_header: string;
      color_theme_footer: string;
      is_aimtenx: boolean;
    }
  }
}
