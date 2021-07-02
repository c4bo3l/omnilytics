import { useState } from "react";
import { Alert, Button, Col, FormGroup, Row } from "react-bootstrap";
import { useGenerateRandomObjects } from "../../hooks";

export type analyzeType = {
  alphabeticals: number;
  realNumbers: number;
  integers: number;
  alphaNumerics: number;
};

export const MainPage = () => {
  const { generateFile } = useGenerateRandomObjects();
  const [url, setURL] = useState<string | undefined>(undefined);
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState<string | undefined>(undefined);

  const defaultAnalyzeResult: analyzeType = {
    alphabeticals: 0,
    realNumbers: 0,
    integers: 0,
    alphaNumerics: 0
  };

  const [analyzeResult, setAnalyzeResult] = useState(defaultAnalyzeResult);

  const generate = () => {
    setIsGenerating(true);
    const generatedFile = generateFile();
    setURL(generatedFile?.url);
    setContent(generatedFile?.content);
    setIsGenerating(false);
    setAnalyzeResult(defaultAnalyzeResult);
  };

  const analyzeContent = () => {
    const data = content?.split(',');
    if (!data) {
      setAnalyzeResult(defaultAnalyzeResult);
      return;
    }

    let result: analyzeType = { ...defaultAnalyzeResult };

    data.forEach((item) => {
      const floatNumber = parseFloat(item);
      if (floatNumber) {
        if (floatNumber === Math.floor(floatNumber)) {
          result = {
            ...result,
            integers: result.integers + 1
          };
        } else {
          result = {
            ...result,
            realNumbers: result.realNumbers + 1
          };
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        result = {
          ...result,
          alphabeticals: result.alphabeticals + 1
        };
      } else {
        result = {
          ...result,
          alphaNumerics: result.alphaNumerics + 1
        };
      }
    });

    setAnalyzeResult({ ...result });
  };

  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Button
              variant='primary'
              disabled={isGenerating}
              onClick={generate}
            >
              {
                isGenerating ?
                  'Generating...' :
                  'Generate'
              }
            </Button>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={1} style={{textAlign: 'right'}}>
          <p>Link:</p>
        </Col>
        <Col>
          {
            url &&
            <a
              href={url}
              download='data.txt'
            >
              {url}
            </a>
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Button
              variant='secondary'
              disabled={isGenerating || !!!content}
              onClick={analyzeContent}
            >
              Report
            </Button>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Alert variant='primary'>
              {
                `Alphabetical string: ${analyzeResult.alphabeticals}`
              }
            </Alert>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Alert variant='secondary'>
              {
                `Real numbers: ${analyzeResult.realNumbers}`
              }
            </Alert>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Alert variant='info'>
              {
                `Integers: ${analyzeResult.integers}`
              }
            </Alert>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Alert variant='dark'>
              {
                `Alphanumerics: ${analyzeResult.alphaNumerics}`
              }
            </Alert>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}