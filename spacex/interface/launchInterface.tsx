interface Link {
  article_link: String,
}

interface Rocket {
  rocket_name: String
}

export interface Launch {
  id: string,
  launch_year: String,
  links: Link,
  mission_name: String,
  rocket: Rocket,
  launch_date_utc: String,
}
