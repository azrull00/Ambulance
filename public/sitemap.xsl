<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap - Ambulan 24 Jam Magelang</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          :root {
            color-scheme: light dark;
          }
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            line-height: 1.5;
            margin: 0 auto;
            max-width: 80rem;
            padding: 2rem;
            background: #f8f9fa;
            color: #333;
          }
          @media (prefers-color-scheme: dark) {
            body {
              background: #1a1a1a;
              color: #f8f9fa;
            }
          }
          h1 {
            color: #dc2626;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
            background: white;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          @media (prefers-color-scheme: dark) {
            table {
              background: #2d2d2d;
            }
          }
          th {
            background: #dc2626;
            color: white;
            text-align: left;
            padding: 0.75rem 1rem;
            font-weight: 600;
          }
          td {
            padding: 0.75rem 1rem;
            border-top: 1px solid #eee;
          }
          @media (prefers-color-scheme: dark) {
            td {
              border-color: #404040;
            }
          }
          tr:hover td {
            background: #f1f5f9;
          }
          @media (prefers-color-scheme: dark) {
            tr:hover td {
              background: #363636;
            }
          }
          a {
            color: #dc2626;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .meta {
            color: #666;
            font-size: 0.875rem;
            margin-bottom: 2rem;
          }
          @media (prefers-color-scheme: dark) {
            .meta {
              color: #aaa;
            }
          }
        </style>
      </head>
      <body>
        <h1>Sitemap - Ambulan 24 Jam Magelang</h1>
        <p class="meta">
          Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
          <br/>
          Last Updated: <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/>
        </p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 
</xsl:stylesheet> 