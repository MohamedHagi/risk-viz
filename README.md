
# Risk-Viz

Risk-Viz is a web application built with Next.js that allows users to visualize and analyze climate risk data. It provides an interactive interface for exploring different risk factors associated with climate change, such as extreme weather events, sea-level rise, and temperature changes.

## Features

- Interactive Map: Risk-Viz utilizes Mapbox to display climate risk data on a geographical map. Users can navigate, zoom in/out, and interact with the map to explore different regions and view specific risk information.

- Data Visualization: The application leverages React components and charting libraries to provide visual representations of climate risk data. Users can easily interpret and analyze data through graphs, charts, and other visual elements.

- Risk Assessment: Risk-Viz enables users to perform risk assessments by integrating various climate risk indicators and generating comprehensive reports. These reports help users understand the potential impact of climate change in specific areas.

- Data Upload: Users can upload their own CSV files containing climate risk data to visualize and analyze custom datasets. The application supports easy integration with external data sources, providing flexibility for researchers, analysts, and policymakers.

## Installation

To install and run Risk-Viz locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MohamedHagi/risk-viz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd risk-viz
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env.local` file in the root directory and provide the following variables:

   ```bash
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
   ```

   Replace `your_mapbox_access_token` with your own Mapbox access token. If you don't have one, you can sign up on the [Mapbox website](https://www.mapbox.com/) to obtain it.

5. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server, and you can access Risk-Viz in your browser at `http://localhost:3000`.

## Usage

1. Data Upload:

   In the Risk-Viz application, navigate to the data upload page. Choose a CSV file containing climate risk data from your local machine, and click the "Upload" button. The application will process the file and load the data for visualization and analysis.

2. Explore Risk Data:

   Once the data is loaded, you can interact with the map to visualize different risk indicators. Use the provided controls to zoom in/out, pan the map, and select specific risk layers to display. Hover over map regions to view detailed information about the risk factors in that area.

3. Generate Reports:

   Utilize the risk assessment features to generate comprehensive reports based on selected risk indicators and geographical regions. Reports provide valuable insights into climate change impacts, helping users make informed decisions and develop effective strategies for risk mitigation and adaptation.

4. Customize Visualization:

   Risk-Viz allows customization of the visualization settings, including map layers, color schemes, and chart types. Modify these settings to tailor the display to your specific requirements and enhance the clarity of the risk data.




## License

Risk-Viz is released under the [MIT License](LICENSE).

## Acknowledgements

The Risk-Viz project acknowledges the use of the following open-source libraries and technologies:

- [Next.js](https://nextjs.org/)
- [Mapbox](https://www.mapbox.com/)
