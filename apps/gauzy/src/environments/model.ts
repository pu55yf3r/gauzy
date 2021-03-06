export interface Environment {
	production: boolean;

	API_BASE_URL: string;
	COMPANY_NAME: string;
	COMPANY_SITE: string;
	COMPANY_LINK: string;
	COMPANY_SITE_LINK: string;
	COMPANY_GITHUB_LINK: string;
	COMPANY_FACEBOOK_LINK: string;
	COMPANY_TWITTER_LINK: string;
	COMPANY_LINKEDIN_LINK: string;
	CLOUDINARY_CLOUD_NAME: string;
	CLOUDINARY_API_KEY: string;
	GOOGLE_AUTH_LINK: string;
	FACEBOOK_AUTH_LINK: string;
	LINKEDIN_AUTH_LINK: string;
	GITHUB_AUTH_LINK: string;
	TWITTER_AUTH_LINK: string;
	MICROSOFT_AUTH_LINK: string;
	AUTH0_AUTH_LINK: string;
	NO_INTERNET_LOGO: string;
	SENTRY_DNS?: string;
	HUBSTAFF_REDIRECT_URI?: string;
	IS_ELECTRON: boolean;

	GOOGLE_MAPS_API_KEY: string;
	DEFAULT_LATITUDE: number;
	DEFAULT_LONGITUDE: number;
	IS_INTEGRATED_DESKTOP: boolean;
}
