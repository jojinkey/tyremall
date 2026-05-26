import { Helmet } from "react-helmet-async";

export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        name: "Tyremall Dehradun",
        image: "https://tyremall.net/og-image.jpg",
        url: "https://tyremall.net/",
        telephone: "+91-7088977333",
        address: {
            "@type": "PostalAddress",
            streetAddress: "GMS Road",
            addressLocality: "Dehradun",
            addressRegion: "Uttarakhand",
            postalCode: "248001",
            addressCountry: "IN",
        },
        openingHours: "Mo-Sa 09:00-20:00",
        priceRange: "₹₹",
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}