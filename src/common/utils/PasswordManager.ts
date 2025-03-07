import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class PasswordManager {
  async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(8).toString('hex');
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${salt}:${derivedKey.toString('hex')}`;
  }

  async verifyPassword(storedHash: string, password: string): Promise<boolean> {
    const [salt, key] = storedHash.split(':');
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    return key === derivedKey.toString('hex');
  }
}
