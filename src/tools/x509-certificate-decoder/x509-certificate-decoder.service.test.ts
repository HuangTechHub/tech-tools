import { describe, expect, it } from 'vitest';
import { decodeCert } from './x509-certificate-decoder.service';

describe('x509-certificate-decoder', () => {
  it('should be able to export decodeCert', () => {
    expect(decodeCert).toBeDefined();
  });
});
